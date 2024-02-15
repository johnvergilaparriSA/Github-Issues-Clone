import Image from "next/image";

export default function Home(){
    return <main className="bg-slate-900 flex flex-col justify-center items-center px-20 py-10 h-screen">
        <div className="flex justify-center flex-col">
            <div className="flex justify-center">
                <Image className="m-2" alt="github logo" src="/Github-logo.png" height={100} width={100}/>
            </div>
            <h1 className="text-3xl text-white font-bold mb-2">GitHub Issues Viewer</h1>
        </div>
        <div className="border border-gray-300 p-10 rounded-lg max-w-2xl ">
            <h1 className="text-white text-4xl">Input the name of the 
                <span className="font-bold mx-2">
                    repository  
                </span>
                 and its 
                <span className="font-bold mx-2">
                    owner 
                </span>
                to view the issues.
            </h1>
            <form className="flex flex-col text-white p-5">
                <input placeholder="Repository" className="rounded-lg bg-slate-800 border border-gray-300 p-1 mb-1" name="repository" required/>
                <input placeholder="Owner" className="rounded-lg bg-slate-800 border border-gray-300 p-1 mb-1" name="owner" required/>
                <div className="w-full flex justify-end">
                    <button type="submit" className="px-2 py-1 bg-green-500 rounded-lg w-1/4 hover:bg-green-600">View Issues</button>
                </div>
            </form>
        </div>
    </main>
}