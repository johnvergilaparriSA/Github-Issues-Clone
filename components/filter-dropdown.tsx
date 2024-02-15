import { useState } from "react";
import { DownIcon } from "./icons";
import Link from "next/link";



export function FilterDropdown(){
    const [isOpen, setOpen] = useState(false);

    function toggle(){
        setOpen(!isOpen);
    }
    const downClass = isOpen? "flex" : "hidden";
    return <>
                <button onClick={toggle} id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-white bg-gray-800 border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-700" type="button"> 
                    Filters
                    <div className="p-.5 mx-1">
                        <DownIcon/>
                    </div>
                </button>
                <div id="dropdown" className={"z-10 bg-slate-900 border border-gray-300 absolute top-[9.5rem] z-30 w-[250px] min-h-[95px] flex flex-col rounded-lg shadow " + (downClass)}>
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                        <li>
                            <Link href="/issues/filter/open/1" className="bg-slate-900 text-white block px-4 py-2 hover:bg-gray-500">Open</Link>
                        </li>
                        <li>
                            <Link href="/issues/filter/closed/1" className="bg-slate-900 text-white block px-4 py-2 hover:bg-gray-500">Closed</Link>
                        </li>
                    </ul>
                </div>
                {isOpen?<div
                        className="fixed top-0 right-0 bottom-0 left-0 z-20 bg-black/40"
                        onClick={toggle}
                    ></div>
                    :
                    <></>}
    </>
}