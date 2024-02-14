import { Inter } from "next/font/google";
import FilterComponent from "@/components/filter-component";
import { ClosedIcon, CommentIcon, DownIcon, LoadingSpinner, OpenIcon } from "@/components/icons";
import { Issue } from "@/types";
import FilterList from "@/components/filter-list";
import ListPagination from "@/components/list-pagination";
import { useEffect, useState } from "react";

// props for Home() if SSR =====
/*props:{
  issues:Issue[], 
  pagination:{
    total:number,
    last_page: number, 
  },
  filter:{
    open_count: number,
    closed_count: number,
  }
}*/
//===============================

interface ExpectedResponseSchema extends Response{
  IssuesData: Issue[],
  openCount: number,
  closedCount: number,
  lastPage: number,
}

export default function Home() {

  const [currentPage ,setPage] = useState(1);
  const [lastPage,setLastPage] = useState(0);
  const [openCount,setOpen] = useState(0);
  const [closedCount,setClosed] = useState(0);
  const [issues, setIssues] = useState<Issue[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [slicedIssues, setSliced] = useState<Issue[]>([])
  const pageSize = 10;

  useEffect(()=>{
    setLoading(true);
    fetch("http://localhost:8000/issues")
    .then((res)=>
      res.json()      
    ).then((data)=>{
      setIssues(data.IssuesData);
      setOpen(data.open_count);
      setClosed(data.closed_count);
      setLastPage(data.last_page);
      setLoading(false);  
    })
    },[])
    const onPageChange = (page:number) =>{
      setPage(page);
    }
    
    const paginate = (data:Issue[], pageNumber:number, pageSize:number) => {
      const startIndex = (pageNumber - 1) * pageSize;
      return data.slice(startIndex, startIndex + pageSize);
   };
   
   useEffect(()=>{
     console.log("i have a lot of " ,issues);
     if(issues){
      setSliced(paginate(issues, currentPage, pageSize));
      console.log(slicedIssues);
    }
  },[issues, currentPage])

  return (
    <main className="bg-slate-900 p-10">
      <h1 className="text-3xl text-white">Repository</h1>
      <h1 className="text-md text-white mb-2">by <span className="font-bold">Owner Name</span></h1>
      <FilterComponent/>
      {!isLoading ?
      <>
      <FilterList issues={slicedIssues} open={openCount} closed={closedCount}/>
      <ListPagination changePage={onPageChange} currentPage={currentPage} lastPage={lastPage}/>
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

// export async function getStaticProps(){

//   let api_data;
//   try{
//     const api_res = await fetch("http://localhost:8000/issues");
//     api_data = await api_res.json()
//     console.log("Received", api_data);
//   }catch(err){
//     console.log(err)
//   }
  
//   if(api_data){
//     return{
//       props:{
//         issues: api_data.IssuesData,
//         pagination:{
//           total:api_data.total, 
//           last_page: api_data.last_page,
//         },
//         filter:{
//           open_count: api_data.openCount,
//           closed_count: api_data.closedCount,
//         }
//       }, 
//     }
//   }
// }