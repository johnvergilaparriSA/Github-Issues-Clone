import { BackIcon, LoadingSpinner } from "@/components/icons";
import IssueContent from "@/components/issue-content";
import IssueHeader from "@/components/issue-header";
import { getData } from "@/dummydata";
import { Issue } from "@/types";
import Link from "next/link";
import { useRouter } from "next/router";
import { remark } from "remark";
import html from 'remark-html';

export default function IssuePage(props:{issue:Issue}){
  const router = useRouter()
  
  return <main className="bg-slate-900 p-10 h-screen px-20">
        {props.issue? <>
        <button  onClick={()=>{router.back()}} className="py-1 flex flex-row justify-center text-white hover:text-blue-500 items-center border border-slate-900 hover:border-gray-300 w-20 rounded-lg ">
          <div className="pr-1 py-1">
            <BackIcon/>
          </div>
          <p className="m-0 text-sm">
            Return
          </p>
        </button>
        <IssueHeader title={props.issue.title} author={props.issue.author} state={props.issue.state} comments={props.issue.comments} code={props.issue.issueNumber}
        closed_at={props.issue.closed_at} created_at={props.issue.created_at}/>
        <hr></hr>
        <IssueContent description={props.issue.description} labels={props.issue.labels}/>
        </>:
        <div className="flex justify-center">
            <LoadingSpinner/>
            <span className="sr-only">Loading...</span>
        </div>
        }
    </main>
}

export async function getServerSideProps(context:{params:{issueId:string}}){
    const { params } = context;
    const { issueId } = params;
    
    let api_data;
    let content;
    try{
      const api_res = await fetch(`http://localhost:8000/issues/${issueId}`);
      api_data = await api_res.json()
      // Use remark to convert markdown into HTML string
      const processedContent = await remark()
      .use(html)
      .process(api_data.description);
      content = processedContent.toString();
      console.log("Received", api_data);
    }catch(err){
      console.log(err)
    }
    


    return{
      props:{
        issue:{
          id: api_data.id,
          issueNumber: api_data.issueNumber,
          title: api_data.title,
          state: api_data.state,
          labels: api_data.labels,
          author: api_data.author,
          created_at: api_data.created_at,
          closed_at: api_data.closed_at,
          comments: api_data.comments,
          description: content,
        }
      },
    }
}