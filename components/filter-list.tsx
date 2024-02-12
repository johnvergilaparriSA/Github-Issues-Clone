import { Issue } from "@/types";
import IssueComponent from "./issue-component";
import { BackIcon, ClosedIcon, DownIcon, NextIcon, OpenIcon } from "./icons";

export default function FilterList(props:{issues:Issue[]}){
    return <>
  <div className="border border-gray-300 rounded-md overflow-hidden">
    <table className="w-full h-full text-sm text-left rtl:text-right text-gray-300 ">
      <thead className="text-xs text-gray-300 bg-slate-800">
          <tr>
            <td scope="col" className="px-6 py-3 flex justify-between w-full">
              <span className="flex flex-row"> 
                <div className="flex flex-row items-center">
                  <div className="ml-2 mr-1">
                    <OpenIcon/> 
                  </div>
                  357 Open 
                </div>
                <div className="flex flex-row items-center">
                  <div className="ml-2">
                    <ClosedIcon/> 
                  </div>
                  9656 Closed
                </div>
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
                return <tr className="border-b bg-slate-900 border-gray-700 hover:bg-slate-800">
                  <td scope="row" key={key} className="px-6 py-4 font-medium text-white whitespace-nowrap">
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
  <div className="flex justify-center">
    <nav className="m-2 flex self-center">
      <ul className="flex items-center -space-x-px h-8 text-sm">
        <li>
          <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight hover:border hover:border-gray-700 text-gray-400 hover:text-white rounded-lg">
            <BackIcon/>
            <span className="ml-2">Previous</span>
          </a>
        </li>
        <li>
          <a href="#" className=" rounded-lg flex items-center justify-center px-3 h-8 leading-tight text-gray-400 hover:border hover:border-gray-300 hover:text-white">1</a>
        </li>
        <li>
          <a href="#" className="rounded-lg flex items-center justify-center px-3 h-8 leading-tight text-gray-400 hover:border hover:border-gray-300 hover:text-white">2</a>
        </li>
        <li>
          <a href="#" className="rounded-lg flex items-center justify-center px-3 h-8 leading-tight text-gray-400 hover:border hover:border-gray-300 hover:text-white">3</a>
        </li>
        <li>
          <a href="#" className="rounded-lg flex items-center justify-center px-3 h-8 leading-tight text-gray-400 hover:border hover:border-gray-300 hover:text-white">4</a>
        </li>
        <li>
          <a href="#" className="rounded-lg flex items-center justify-center px-3 h-8 leading-tight text-gray-400 hover:border hover:border-gray-300 hover:text-white">5</a>
        </li>
        <li>
          <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight hover:border hover:border-gray-700 text-gray-400 hover:text-white rounded-lg">
            <span className="mr-2">Next</span>
            <NextIcon/>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</>
}