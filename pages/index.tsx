import Image from "next/image";
import { Inter } from "next/font/google";
import { GetStaticProps } from "next";
import FilterComponent from "@/components/filter-component";
import { ClosedIcon, CommentIcon, DownIcon, OpenIcon } from "@/components/icons";
import { Issue } from "@/types";
import IssueComponent from "@/components/issue-component";

const inter = Inter({ subsets: ["latin"] });

const objects:Issue[] =[
   {
     id: 1,
     issueNumber: 1347,
     title: "Found a bug",
     state: "open",
     labels: [{
       "id": 208045946,
       "name": "bug",
       "color": "f29513",
     }],
     author: "octocat",
     created_at: "2011-04-22T13:33:48Z",
     closed_at: "",
     comments: 0,
 },{
   id: 2,
   issueNumber: 1348,
   title: "Found a bug",
   state: "closed",
   labels: [],
   author: "octocat",
   created_at: "2011-04-22T13:33:48Z",
   closed_at: "2011-04-22T13:33:48Z",
   comments: 1,
 },
 {
   id: 3,
   issueNumber: 1349,
   title: "Found a bug",
   state: "closed",
   labels: [],
   author: "octocat",
   created_at: "2011-04-22T13:33:48Z",
   closed_at: "2011-04-22T13:33:48Z",
   comments: 2,
 }, 
];

export default function Home() {
  return (
    <main className="bg-slate-900 p-10">
      <h1 className="text-3xl text-white">Repository</h1>
      <h1 className="text-md text-white mb-2">by <span className="font-bold">Owner Name</span></h1>
      <FilterComponent/>
      <div className="border border-gray-300 rounded-md overflow-hidden">
        <table className="w-full h-full text-sm text-left rtl:text-right text-gray-300 ">
          <thead className="text-xs text-gray-300 bg-slate-800">
              <tr>
                  <td scope="col" className="px-6 py-3 flex justify-between w-full">
                    <span className="flex flex-row"> 
                      <div className="flex flex-row items-center">
                        <div className="ml-2 mr-1">
                          <OpenIcon/> 
                        </div>
                        357 Open 
                      </div>
                      <div className="flex flex-row items-center">
                        <div className="ml-2">
                          <ClosedIcon/> 
                        </div>
                        9656 Closed
                      </div>
                    </span>
                    <div className="flex flex-row">
                      Sort
                      <div className="p-.5 mx-1">
                        <DownIcon/>
                      </div>
                    </div>
                  </td>
              </tr>
          </thead>
          <tbody>
                  {objects.length > 0?
                  objects.map((obj, key)=>{
                    return <tr className="border-b bg-slate-900 border-gray-700 hover:bg-slate-800">
                      <td scope="row" key={key} className="px-6 py-4 font-medium text-white whitespace-nowrap">
                        <IssueComponent issue={obj}/>
                      </td>
                    </tr>
                  }):
                  <tr>
                    <td className="m-2 w-full flex justify-center text-xl text-center">
                        No Issues found
                    </td>
                  </tr>
                  }               
          </tbody>
      </table>
    </div>
    </main>
  );
}

