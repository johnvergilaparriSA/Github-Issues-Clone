import FilterComponent from "@/components/filter-component";
import FilterList from "@/components/filter-list";
import { LoadingSpinner } from "@/components/icons";
import ListPagination from "@/components/list-pagination";
import { Issue } from "@/types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function DisplayList(props:{
    issues:Issue[], 
    filter:{
      open_count: number,
      closed_count: number,
      total_count: number,
    },
    page: number,
    filterActive: string,
    owner: string,
    repo: string,
  }) {

    const [loading, setLoading] = useState(false);
    const router = useRouter();
    
    useEffect(()=>{
        const handleStart = (url:string) => (url !== router.asPath) && setLoading(true);
        const handleEnd = () =>  setLoading(false);

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleEnd);
        router.events.on('routeChangeError', handleEnd);
        
        return()=>{
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleEnd);
            router.events.off('routeChangeError', handleEnd);
        }
    })
    return (
      <main className="bg-slate-900 p-10 px-20">
        <h1 className="text-3xl text-white">{props.repo}</h1>
        <h1 className="text-md text-white mb-2">by <span className="font-bold">{props.owner}</span></h1>
        <FilterComponent/>
        {!loading?
        <>
        <FilterList owner={props.owner} repo={props.repo} page={props.page} active={props.filterActive} issues={props.issues} open={props.filter.open_count} closed={props.filter.closed_count}/>
        <ListPagination active={props.filterActive} currentPage={props.page} lastPage={Math.ceil(props.filter.total_count/7)}/>
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

export async function getServerSideProps(context:{query:{page:string,filter:string,search:string, slugs:string[]}}){
    const { query } = context;
    const { slugs, page, filter, search } = query;

    
    if(!slugs){
        return <p className="center">loading...</p>
    }

    const owner = slugs[0];
    const repo = slugs[1];


    let api_data;
    try{
    const api_res = await fetch(`http://localhost:8000/issues?owner=${owner}&repo=${repo}&page=${page || "1"}&state=${filter || "all"}`);
    api_data = await api_res.json()
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
        },
        page: parseInt(page || "1"),
        filterActive:  filter || "none",
        owner: owner || "Vuejs",
        repo: repo || "Vue"
      }, 
    }
  
} 