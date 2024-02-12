import { Issue } from "./types"


const data: Issue[] = [
    {
        id: 1,
        issueNumber: 1347,
        state: "open",
        title: "Found a bug",
        description: "I'm having a problem with this.",
        author: "octocat",
        labels: [
          {
            id: 208045946,
            name: "bug",
            color: "f29513",
          }
        ],
        comments: 0,
        closed_at: "",
        created_at: "2011-04-22T13:33:48Z",
    },
    {
        id: 2,
        issueNumber: 1348,
        state: "closed",
        title: "Found an Insect",
        description: "I'm having a problem with this.",
        author: "octocat",
        labels: [
        ],
        comments: 1,
        closed_at: "2011-04-22T13:33:48Z",
        created_at: "2011-04-22T13:33:48Z",
    },
    {
        id: 3,
        issueNumber: 1349,
        state: "closed",
        title: "Found an Arachnid!",
        description: "I'm having a problem with this.",
        author: "octocat",
        labels: [
          {
            id: 208045946,
            name: "bug",
            color: "f29513",
          }
        ],
        comments: 7,
        closed_at: "2012-05-23T13:33:48Z",
        created_at: "2011-04-22T13:33:48Z",
    }
]
export function getData(id:number){
    return data[id - 1];
} 

export function getAllData(){
    return data;
}