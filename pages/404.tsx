import Link from "next/link";

export default function NotFoundPage(){
    return <main className="px-20 py-10 flex justify-center items-center h-screen flex-col">
        <h1 className="text-4xl text-white font-bold">Repository not found...</h1>
        <div className="w-full m-5 flex justify-center">
            <Link href="/" className=" focus:outline-none text-white bg-green-600 hover:bg-green-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 m-2">Try another repository</Link>
        </div>
    </main>
}