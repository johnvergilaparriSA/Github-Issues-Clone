import FilterComponent from "@/components/filter-component";
import FilterList from "@/components/filter-list";
import { LoadingSpinner } from "@/components/icons";
import ListPagination from "@/components/list-pagination";
import { Issue } from "@/types";

export default function Home(props:{
    issues:Issue[], 
    filter:{
      open_count: number,
      closed_count: number,
      total_count: number,
    },
    page: number;
  }) {
  
    return (
      <main className="bg-slate-900 p-10 px-20">
        <h1 className="text-3xl text-white">Repository</h1>
        <h1 className="text-md text-white mb-2">by <span className="font-bold">Owner Name</span></h1>
        <FilterComponent/>
        {props.issues && props.filter ?
        <>
        <FilterList issues={props.issues} open={props.filter.open_count} closed={props.filter.closed_count}/>
        <ListPagination currentPage={props.page} lastPage={Math.ceil(props.filter.total_count/7)}/>
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

export async function getServerSideProps(context:{params:{page:string}}){
    const { params } = context;
    const { page } = params;

  let api_data;
  try{
    const api_res = await fetch(`http://localhost:8000/issues?page=${page}`);
    api_data = await api_res.json()
  }catch(err){
    console.log(err)
  }

  if(api_data){
    return{
      props:{
        issues: api_data.IssuesData,
        filter:{
          total_count: api_data.total,
          open_count: api_data.open_count,
          closed_count: api_data.closed_count,
        },
        page: parseInt(page),
      }, 
    }
  }
} 