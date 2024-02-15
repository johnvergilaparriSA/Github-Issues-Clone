import { Controller, Get, Param, Query, Req } from '@nestjs/common';
import { Octokit } from 'octokit';
import { IssueDTO, RequestQueryDTO } from './dtos/issue.dto';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';


async function getPaginatedData(url:string, octokit:Octokit) {
  const nextPattern = /(?<=<)([\S]*)(?=>; rel="Next")/i;
  let pagesRemaining = true;
  let data = [];

  while (pagesRemaining) {
    const response = await octokit.request(`GET ${url}`, {
      per_page: 100,
      headers: {
        "X-GitHub-Api-Version":
          "2022-11-28",
      },
    });

    const parsedData = parseData(response.data)
    data = [...data, ...parsedData];

    const linkHeader = response.headers.link;

    pagesRemaining = linkHeader && linkHeader.includes(`rel=\"next\"`);

    if (pagesRemaining) {
      url = linkHeader.match(nextPattern)[0];
    }
  }

  return data;
}

function getLabelArray(labels:{
    id: number,
    node_id: string,
    url: string,
    name: string;
    color: string,
    default:boolean,
    description:string,
}[]):{
    id: number,
    name: string,
    color: string,
}[]{
    const labelArr = [];
    if (labels.length <= 0){
        return [];
    }else{
        labels.map((label, key)=>{
            labelArr.push({
                id:label.id,
                name: label.name,
                color: label.color,
            })
        })
        return labelArr;
    }
}

function parseData(data) {
  // If the data is an array, return that
    if (Array.isArray(data)) {
      return data
    }

  // Some endpoints respond with 204 No Content instead of empty array
  //   when there is no data. In that case, return an empty array.
  if (!data) {
    return []
  }

  // Otherwise, the array of items that we want is in an object
  // Delete keys that don't include the array of items
  delete data.incomplete_results;
  delete data.repository_selection;
  delete data.total_count;
  // Pull out the array of items
  const namespaceKey = Object.keys(data)[0];
  data = data[namespaceKey];

  return data;
}

@Controller('/')
export class IssueController {

    constructor(private configService: ConfigService){
    }

    @Get('/issues')
    async getAllIssues(
      @Query() query:RequestQueryDTO
    ){
      const octokit = new Octokit({
        auth: this.configService.get<string>("API_TOKEN"),
    })
        const {state, page} = query;
        let IssuesData:IssueDTO[] = [];
        const api_res = await octokit.request(`https://api.github.com/repos/vuejs/vue/issues?state=${state || "all"}&page=${page || 1}&per_page=7`);
        const data = await api_res.data;
        data.map((res)=>{
          let labelArr = getLabelArray(res.labels);
          IssuesData.push({
            id: res.id,
                issueNumber: res.number,
                title: res.title,
                state: res.state,
                labels: labelArr,
                author: res.user.login,
                created_at: res.created_at,
                closed_at: res.closed_at,
                comments: res.comments,
                description: res.body,
              })
        })
        
        let queryStr = "repo:vuejs/vue type:issue state:open"
        const api_open_res = await octokit.request("GET /search/issues",{
          q: queryStr,
        });
        
        const open_data = await api_open_res.data;
        const openCount = open_data.total_count;
        
        queryStr = "repo:vuejs/vue type:issue state:closed"
        const api_closed_res = await octokit.request("GET /search/issues",{
          q:queryStr,
        });
        
        
        const closed_data = await api_closed_res.data;
        const closedCount = closed_data.total_count;
        
        const total = openCount + closedCount;
        const perPage = 10;        
        
        const check = await octokit.request("GET /rate_limit",);
        console.log(check.data.rate);
        
        return{
          IssuesData,
          total: total? total : null,
          last_page: Math.ceil(total/perPage),
          open_count: openCount? openCount: null,
          closed_count: closedCount? closedCount: null 
        }
    }

    @Get('/issues/:code')
    async getIssue(
      @Param('code') code: number
      ):Promise<IssueDTO>{
        const octokit = new Octokit({
          auth: this.configService.get<string>("API_TOKEN"),
        })
        const api_res = await octokit.request(`https://api.github.com/repos/vuejs/vue/issues/${code}`)
        const data = await api_res.data;

        let labelArr = getLabelArray(data.labels);

        const check = await octokit.request("GET /rate_limit",);
        console.log(check.data.rate);

        return{
        id: data.id,
        issueNumber: data.number,
        title: data.title,
        state: data.state,
        labels: labelArr,
        author: data.user.login,
        created_at: data.created_at,
        closed_at: data.closed_at,
        comments: data.comments,
        description: data.body,}
        
    }
        
}
