import { Label } from "@/types"

export default function IssueContent(props:{
    description: string,
    labels: Label[],
}){
    return <div className="flex flex-row text-white p-2 w-full">
    <div className="flex flex-col w-3/4">
        <h1 className="text-4xl">Information</h1>
        <div className="text-wrap border border-gray-300 h-auto w-full p-5 m-1 rounded-lg overflow-hidden">
            <div className="text-pretty break-words inline-block" style={{wordWrap: "break-word" }} dangerouslySetInnerHTML={{ __html: props.description }} />
            
        </div>
    </div>
    <div className="w-1/4 p-10" >
        <span className="font-bold">Label</span>
        <ul>
            { props.labels.length > 0?
                props.labels.map((label, key)=>{
                    return <ul key={key}> 
                        <div className="px-2 rounded-lg text-xs w-auto flex justify-center" style={{backgroundColor:`#${label.color}`}}>
                            {label.name}
                        </div> 
                    </ul>
                }):
                <li>None yet</li>}
        </ul>
    </div>
</div>
}