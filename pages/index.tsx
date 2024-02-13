import { Inter } from "next/font/google";
import FilterComponent from "@/components/filter-component";
import { ClosedIcon, CommentIcon, DownIcon, LoadingSpinner, OpenIcon } from "@/components/icons";
import { Issue } from "@/types";
import FilterList from "@/components/filter-list";
import ListPagination from "@/components/list-pagination";
import { useState } from "react";


export default function Home(props:{
  issues:Issue[], 
  pagination:{
    page:number, 
    total:number, 
    lastPage:number,
  }}) {

  const [issues,SetIssues] = useState(props.issues);
  const [currentPage ,SetPage] = useState(props.pagination.page);
  const [isLoading, setLoading] = useState(false);

  return (
    <main className="bg-slate-900 p-10">
      <h1 className="text-3xl text-white">Repository</h1>
      <h1 className="text-md text-white mb-2">by <span className="font-bold">Owner Name</span></h1>
      <FilterComponent/>
      {props.issues && props.pagination && !isLoading?
      <>
      <FilterList issues={props.issues}/>
      <ListPagination currentPage={currentPage} total={props.pagination.total} lastPage={props.pagination.lastPage}/>
      </> 
      :
      <div className="flex justify-center">
      <LoadingSpinner/>
      <span className="sr-only">Loading...</span>
      </div>
      }
    </main>
  );
}

export async function getServerSideProps(){

  let api_data;
  try{
    const api_res = await fetch("http://localhost:8000/issues");
    api_data = await api_res.json()
    console.log("Received", api_data);
  }catch(err){
    console.log(err)
  }
  
  if(api_data){
    return{
      props:{
        issues: api_data.IssuesData,
        pagination:{
          page:api_data.page, 
          total:api_data.total, 
          lastPage:api_data.last_page,
        }
      }, 
    }
  }
}