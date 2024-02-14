import Link from "next/link";
import { BackIcon, NextIcon } from "./icons";

export default function ListPagination(props:{
    currentPage:number, 
    lastPage:number,
}){
    return <div className="flex justify-center">
    <nav className="m-2 flex self-center">
      <ul className="flex items-center -space-x-px h-8 text-sm">
        <li>
          <Link href={props.currentPage ===1? "#": "/" + (props.currentPage - 1)} className={"mx-2 flex border border-1 border-slate-900 items-center justify-center px-3 h-8 ms-0 leading-tight  hover:border-gray-700 rounded-lg cursor-default " + (props.currentPage === 1? " border-solid bg-gray-500 text-gray-700 hover:text-gray-700 cursor-default ":" text-blue-500 ")}>
            <BackIcon/>
            <span className="ml-2">Previous</span>
          </Link>
        </li>       
        <li>
          <Link href={props.currentPage === props.lastPage? "#": "/" + (props.currentPage + 1)}
          className={"mx-2 flex border border-1 border-slate-900 items-center justify-center px-3 h-8 ms-0 leading-tight hover:border-gray-700  rounded-lg cursor-pointer " + (props.currentPage === props.lastPage? " border-solid bg-gray-500 text-gray-700 hover:text-gray-700 cursor-default":" text-blue-500 ")}>
            <span className="mr-2">Next</span>
            <NextIcon/>
          </Link>
        </li>
      </ul>
    </nav>
  </div>
}