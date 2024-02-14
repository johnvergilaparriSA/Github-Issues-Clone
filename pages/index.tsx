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
    total:number,
    last_page: number, 
  },
  filter:{
    open_count: number,
    closed_count: number,
  }
}) {

  const [currentPage ,setPage] = useState(1);
  const pageSize = 10;

  const onPageChange = (page:number) =>{
    setPage(page);
  }

  const paginate = (data:Issue[], pageNumber:number, pageSize:number) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return data.slice(startIndex, startIndex + pageSize);
   };

  const slicedIssueData = paginate(props.issues, currentPage, pageSize);

  return (
    <main className="bg-slate-900 p-10">
      <h1 className="text-3xl text-white">Repository</h1>
      <h1 className="text-md text-white mb-2">by <span className="font-bold">Owner Name</span></h1>
      <FilterComponent/>
      {slicedIssueData && props.pagination?
      <>
      <FilterList issues={slicedIssueData} open={props.filter.open_count} closed={props.filter.closed_count}/>
      <ListPagination changePage={onPageChange} currentPage={currentPage} lastPage={props.pagination.last_page}/>
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

export async function getStaticProps(){

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
          total:api_data.total, 
          last_page: api_data.last_page,
        },
        filter:{
          open_count: api_data.open_count,
          closed_count: api_data.closed_count,
        }
      }, 
    }
  }
}