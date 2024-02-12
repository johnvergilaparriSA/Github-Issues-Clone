import { LoadingSpinner } from "@/components/icons";
import IssueContent from "@/components/issue-content";
import IssueHeader from "@/components/issue-header";
import { getData } from "@/dummydata";
import { Issue } from "@/types";

export default function IssuePage(props:{issue:Issue}){
    return <main className="bg-slate-900 p-10">
        {props.issue? <>
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

export function getServerSideProps(context:{params:{issueId:string}}){
    const { params } = context;
    const { issueId } = params;
  
    const issueData = getData(parseInt(issueId));
    
    return{
      props:{
        issue: issueData
      },
    }
}