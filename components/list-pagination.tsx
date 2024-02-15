import Link from "next/link";
import { BackIcon, NextIcon } from "./icons";

export default function ListPagination(props:{
    currentPage:number, 
    lastPage:number,
    active: string,
}){

  function getLink(filter:string, page: number, isIncrement:boolean){
    if(filter === "none"){
      if(isIncrement){
        return '/issues/' + (page + 1);
      }else{
        return '/issues/' + (page - 1);
      }
    }else{
      if(isIncrement){
        return "/issues/filter/" + filter + "/" + (page + 1); 
      }else{
        return "/issues/filter/" + filter + "/" + (page - 1);
      }
    }
  }

    return <div className="flex justify-center">
    <nav className="m-2 flex self-center">
      <ul className="flex items-center -space-x-px h-8 text-sm">
        <li>
          <Link href={props.currentPage ===1? "#": "" + getLink(props.active, props.currentPage, false)} className={"mx-2 flex border border-1 border-slate-900 items-center justify-center px-3 h-8 ms-0 leading-tight  hover:border-gray-700 rounded-lg cursor-pointer " + (props.currentPage === 1? " border-solid bg-gray-500 text-gray-700 hover:text-gray-700 cursor-default ":" text-blue-500 ")}>
            <BackIcon/>
            <span className="ml-2">Previous</span>
          </Link>
        </li>       
        <li>
          <Link href={props.currentPage === props.lastPage? "#": "" + getLink(props.active, props.currentPage, true)}
          className={"mx-2 flex border border-1 border-slate-900 items-center justify-center px-3 h-8 ms-0 leading-tight hover:border-gray-700  rounded-lg cursor-pointer " + (props.currentPage === props.lastPage? " border-solid bg-gray-500 text-gray-700 hover:text-gray-700 cursor-default":" text-blue-500 ")}>
            <span className="mr-2">Next</span>
            <NextIcon/>
          </Link>
        </li>
      </ul>
    </nav>
  </div>
}