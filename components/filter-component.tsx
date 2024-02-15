import Link from "next/link";
import { FilterDropdown } from "./filter-dropdown";
import {DownIcon, LabelIcon, SearchIcon} from "./icons";

export default function FilterComponent(){


    return <>
    <div className="flex flex-row w-full justify-around">
        <form className="w-full">
            <div className="flex">
                <FilterDropdown/>
                <div className="relative w-full">
                    <div className="absolute inset-y-0 start-0 flex items-center p-2 pointer-events-none text-white">
                        <SearchIcon/>
                    </div>
                    <input type="search" id="search-dropdown" className="text-white block ps-10 p-2.5 w-full z-20 text-sm text-gray-900 bg-black rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search all issues" required/>
                </div>    
            <button type="button"  className="focus:outline-none text-white bg-green-600 hover:bg-green-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-1">Search</button>
            </div>
        </form>
        <div className="w-3/4 flex flex-row justify-end">
            <Link href="/" className="focus:outline-none text-white bg-green-600 hover:bg-green-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-2 mb-2">Change Repository</Link>
        </div>    
    </div>
    </>
}
