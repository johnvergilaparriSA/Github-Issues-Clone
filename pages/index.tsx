import Image from "next/image";
import { Inter } from "next/font/google";
import { GetStaticProps } from "next";
import FilterComponent from "@/components/filter-component";
import { ClosedIcon, CommentIcon, DownIcon, LoadingSpinner, OpenIcon } from "@/components/icons";
import { Issue } from "@/types";
import IssueComponent from "@/components/issue-component";
import FilterList from "@/components/filter-list";
import { getAllData } from "@/dummydata";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props:{issues:Issue[]}) {
  return (
    <main className="bg-slate-900 p-10">
      <h1 className="text-3xl text-white">Repository</h1>
      <h1 className="text-md text-white mb-2">by <span className="font-bold">Owner Name</span></h1>
      <FilterComponent/>
      {props.issues? <FilterList issues={props.issues}/>:
      <div className="flex justify-center">
      <LoadingSpinner/>
      <span className="sr-only">Loading...</span>
      </div>
      }
    </main>
  );
}

export function getServerSideProps(){
  
  const issueData = getAllData();
  return{
    props:{
      issues: issueData
    },
  }
}