import { BackIcon, NextIcon } from "./icons";

export default function ListPagination(props:{
    currentPage:number, 
    total: number, 
    lastPage:number,
}){

    return <div className="flex justify-center">
    <nav className="m-2 flex self-center">
      <ul className="flex items-center -space-x-px h-8 text-sm">
        <li>
          <a href={"/" + (props.currentPage - 1).toString()} aria-disabled={props.currentPage === 1? true: false} className="flex items-center justify-center px-3 h-8 ms-0 leading-tight hover:border hover:border-gray-700 text-gray-400 hover:text-white rounded-lg">
            <BackIcon/>
            <span className="ml-2">Previous</span>
          </a>
        </li>       
        <li>
          <a href={"/" + (props.currentPage + 1).toString()} aria-disabled={props.currentPage === props.lastPage? true: false} className="flex items-center justify-center px-3 h-8 ms-0 leading-tight hover:border hover:border-gray-700 text-gray-400 hover:text-white rounded-lg">
            <span className="mr-2">Next</span>
            <NextIcon/>
          </a>
        </li>
      </ul>
    </nav>
  </div>
}