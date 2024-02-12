import Image from "next/image";
import { Inter } from "next/font/google";
import { GetStaticProps } from "next";
import FilterComponent from "@/components/filter-component";
import { DownIcon } from "@/components/icons";

const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  return (
    <main className="bg-slate-900 p-10">
      <h1 className="text-3xl text-white">Owner Name</h1>
      <h1 className="text-3xl text-white">Repository</h1>
      <FilterComponent/>
      <div className="border border-gray-300 rounded-md overflow-hidden">
        <table className="w-full h-full text-sm text-left rtl:text-right text-gray-300">
          <thead className="text-xs text-gray-300 bg-slate-800">
              <tr>
                  <th scope="col" className="px-6 py-3 flex justify-between w-full">
                      <p>357 Open  9656 Closed</p>
                      <div className="flex flex-row">
                        Sort
                        <div className="p-.5 mx-1">
                          <DownIcon/>
                        </div>
                      </div>
                  </th>
              </tr>
          </thead>
          <tbody className="h-full">
              <tr className="border-b bg-gray-800 border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      Apple MacBook Pro 17"
                  </th>
              </tr>
          </tbody>
      </table>
    </div>
    </main>
  );
}

