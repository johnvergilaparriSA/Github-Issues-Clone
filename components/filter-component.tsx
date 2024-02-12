import {DownIcon, LabelIcon, SearchIcon} from "./icons";

export default function FilterComponent(){
    return <>
    <div className="flex flex-row w-full justify-around">
        <form className="w-full">
            <div className="flex">
                <button id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-white bg-gray-800 border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-700" type="button"> 
                    Filters
                    <div className="p-.5 mx-1">
                        <DownIcon/>
                    </div>
                </button>
                <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Open</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Closed</a>
                        </li>
                    </ul>
                </div>
                <div className="relative w-full">
                    <div className="absolute inset-y-0 start-0 flex items-center p-2 pointer-events-none text-white">
                        <SearchIcon/>
                    </div>
                    <input type="search" id="search-dropdown" className="text-white block ps-10 p-2.5 w-full z-20 text-sm text-gray-900 bg-black rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search all issues" required/>
                </div>
            </div>
        </form>
        <div className="w-3/4 flex flex-row justify-end">
            <button type="button" className="focus:outline-none text-white bg-slate-900 border border-gray-300 hover:bg-slate-800 font-medium rounded-lg text-sm px-2 py-1 flex flex-row flex items-center ml-2 mb-2">
                <LabelIcon/>
                <span className="mx-2 flex items-center">
                    Labels 
                </span>
                <span className="text-xs bg-slate-500 rounded-lg px-2 py-1">
                    (7)
                </span>
            </button>
            <button type="button" className="focus:outline-none text-white bg-green-600 hover:bg-green-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-2 mb-2">Change Repository</button>
        </div>    
    </div>
    </>
}
