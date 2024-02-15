import Link from "next/link";
import { BackIcon, NextIcon } from "./icons";
import { useRouter } from "next/router";

export default function ListPagination(props:{
    currentPage:number, 
    lastPage:number,
    active: string,
}){

  const router = useRouter();
  function changePage(page: number, isIncrement:boolean){
    let newPage;
    if(isIncrement){
      newPage = page + 1;
    }else{
      newPage = page - 1;
    }
    router.replace(
      {query:{...router.query, page:newPage}},
    )
  }

    return <div className="flex justify-center">
    <nav className="m-2 flex self-center">
      <ul className="flex items-center -space-x-px h-8 text-sm">
        <li>
          <div onClick={()=>{changePage(props.currentPage, false)}} className={"mx-2 flex border border-1 border-slate-900 items-center justify-center px-3 h-8 ms-0 leading-tight  hover:border-gray-700 rounded-lg cursor-pointer " + (props.currentPage === 1? " border-solid bg-gray-500 text-gray-700 hover:text-gray-700 cursor-default ":" text-blue-500 ")}>
            <BackIcon/>
            <span className="ml-2">Previous</span>
          </div>
        </li>       
        <li>
          <div onClick={()=>{changePage(props.currentPage, true)}} className={"mx-2 flex border border-1 border-slate-900 items-center justify-center px-3 h-8 ms-0 leading-tight hover:border-gray-700  rounded-lg cursor-pointer " + (props.currentPage === props.lastPage? " border-solid bg-gray-500 text-gray-700 hover:text-gray-700 cursor-default":" text-blue-500 ")}>
            <span className="mr-2">Next</span>
            <NextIcon/>
          </div>
        </li>
      </ul>
    </nav>
  </div>
}