import { Issue } from "@/types";
import { ClosedIcon, CommentIcon, OpenIcon } from "./icons";
import Link from "next/link";


export default function IssueComponent(props: {issue:Issue}){
    const {id, title, author, created_at, closed_at, issueNumber, comments, state, labels} = props.issue;
    const readableOpenDate = new Date(created_at).toDateString();
    const readableCloseDate = new Date(closed_at).toDateString();

    return <div className="flex flex-row justify-between">
        <div className="flex flex-row">
            {state === 'open'?  
                <div className={"text-green-500 px-2 pt-1"}>
                    <OpenIcon/>
                </div>
                :
                <div className={"text-fuchsia-500 px-2 pt-1"}>
                    <ClosedIcon/>
                </div>
            }
                
            <div className="flex flex-col p-1">
            <div className="flex flex-row">
                <Link href={/issue/ + issueNumber.toString()}>
                    <span className="font-bold cursor:pointer hover:text-blue-500">
                        {title}
                    </span>
                </Link>
                {
                    labels.length > 0?
                    labels.map((label, key)=>{
                        return <div key={key} className="px-2 py-.5 mx-2 rounded-lg text-xs flex items-center" style={{backgroundColor:"#" +  label.color}}>{label.name}</div>
                    })
                    :<>
                    </>
                }
            </div>
            <div className="text-xs">
            {state === 'open'?  
                `#${issueNumber} opened on ${readableOpenDate} by ${author} `
                :
                `#${issueNumber} by ${author} was closed on ${readableCloseDate} ` 
            }
            </div>
            </div>
        </div>  
        {comments > 0? <div className="flex flex-row">
        <CommentIcon/>
        <span className="text-xs mx-1">
            {comments}
        </span>
        </div>:<></>}
    </div>
}