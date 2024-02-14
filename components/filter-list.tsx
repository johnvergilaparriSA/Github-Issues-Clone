import { Issue } from "@/types";
import IssueComponent from "./issue-component";
import { BackIcon, ClosedIcon, DownIcon, NextIcon, OpenIcon } from "./icons";
import Link from "next/link";

export default function FilterList(props:{issues:Issue[], open: number, closed: number, active:string}){
    return <>
  <div className="border border-gray-300 rounded-md overflow-hidden">
    <table className="w-full h-full text-sm text-left rtl:text-right text-gray-300 ">
      <thead className="text-xs text-gray-300 bg-slate-800">
          <tr>
            <td scope="col" className="px-6 py-3 flex justify-between w-full">
              <span className="flex flex-row"> 

                <Link href="/filter/open/1" className={"flex flex-row items-center " + (props.active === "open"? 
                "text-white cursor-default font-bold"
                :
                "hover:text-white cursor-pointer")}>
                  <div className="ml-2 mr-1">
                    <OpenIcon/> 
                  </div>
                  {props.open} Open 
                </Link>
                
                <Link href="/filter/closed/1" className={"flex flex-row items-center " + (props.active === "closed"? 
                "text-white cursor-default font-bold"
                :
                "hover:text-white cursor-pointer")}>
                  <div className="ml-2">
                    <ClosedIcon/> 
                  </div>
                  {props.closed} Closed
                </Link>


              </span>
              <div className="flex flex-row">
                Sort
                <div className="p-.5 mx-1">
                  <DownIcon/>
                </div>
              </div>
            </td>
          </tr>
      </thead>
        <tbody>
              {props.issues.length > 0?
              props.issues.map((obj, key)=>{
                return <tr key={key} className="border-b bg-slate-900 border-gray-700 hover:bg-slate-800">
                  <td scope="row"  className="px-6 py-4 font-medium text-white whitespace-nowrap">
                    <IssueComponent issue={obj}/>
                  </td>
                </tr>
              }):
              <tr>
                <td className="m-2 w-full flex justify-center text-xl text-center">
                    No Issues found
                </td>
              </tr>
              }               
        </tbody>
    </table>
  </div>
</>
}