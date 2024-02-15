import { Inter } from "next/font/google";
import FilterComponent from "@/components/filter-component";
import { ClosedIcon, CommentIcon, DownIcon, LoadingSpinner, OpenIcon } from "@/components/icons";
import { Issue } from "@/types";
import FilterList from "@/components/filter-list";
import ListPagination from "@/components/list-pagination";
import { useEffect, useState } from "react";

export default function ListPage(props:{
  issues:Issue[], 
  filter:{
    open_count: number,
    closed_count: number,
    total_count: number,
  },
}) {

  return (
    <main className="bg-slate-900 p-10 px-20">
      <h1 className="text-3xl text-white">Repository</h1>
      <h1 className="text-md text-white mb-2">by <span className="font-bold">Owner Name</span></h1>
      <FilterComponent/>
      {props.issues && 
      props.filter?
      <>
      <FilterList active="none" issues={props.issues} open={props.filter.open_count} closed={props.filter.closed_count}/>
      <ListPagination active="none" currentPage={1} lastPage={Math.ceil(props.filter.total_count/7)}/>
      </> 
      :
      <div className="flex justify-center h-screen items-center">
      <LoadingSpinner/>
      <span className="sr-only">Loading...</span>
      </div>
      }
    </main>
  );
}

export async function getStaticProps(){

  let api_data;
  
  try{
    const api_res = await fetch("http://localhost:8000/issues");
    api_data = await api_res.json()
    console.log("Received", api_data);
  }catch(err){
    console.log(err)
  }
    return{
      props:{
        issues: api_data.IssuesData,
        filter:{
          total_count: api_data.total,
          open_count: api_data.open_count,
          closed_count: api_data.closed_count,
        }
      }, 
    }
}