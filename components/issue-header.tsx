import { ClosedIcon, OpenIcon } from "./icons";

export default function IssueHeader(props:{
    title:string,
    author:string,
    created_at:string,
    closed_at:string,
    code:number,
    state: "open" | "closed",
    comments: number,
}){

    const date = new Date(props.created_at).toDateString();
    
    return <>
    <span className="text-5xl text-white">{props.title} <span className="text-3xl text-slate-400">{`#${props.code}`}</span></span>
    <div className="flex flex-row w-auto m-2">
            { props.state === "open"?
            <div className="bg-green-600 rounded-full px-2 p-1 flex flex-row text-white items-center">
                <div className="p-2">
                    <OpenIcon/>
                </div>
                <span className="mr-2">
                    Open
                </span>
            </div>
            :
            <div className="bg-fuchsia-600 rounded-full px-2 p-1 flex flex-row text-white items-center">
                <div className="p-2">
                    <ClosedIcon/>
                </div>
                <span className="mr-2">
                    Closed
                </span>
            </div>}
        <div className="px-2 p-1 flex flex-row text-white items-center">
            <span className="font-bold mr-1">{props.author}</span> opened this issue on {date} • {props.comments} comments
        </div>
    </div>
    </>
}