import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import useFetch from "../hooks/useFetch";
export default function Todo({ props }: {props: React.ReactNode}) {
  const router = useRouter();
  const {counter} = useFetch();
    return (  
    <div className="container mx-auto grid mt-10">
         <div className="card bg-white w-[480px] justify-self-center">
   <main>{props}</main>
    <footer className="card-footer flex justify-between items-center text-sm">
      <span className="flex">{counter} Items</span>
      <ul className="flex space-x-2 z-40 filters">    
        <li className="flex"><Link href="/" className={router.pathname == "/" ? "active" : ""}>All</Link> </li>
        <li className="flex"><Link href="/active" className={router.pathname == "/active" ? "active" : ""}>Active</Link> </li>
        <li className="flex"><Link href="/completed" className={router.pathname == "/completed" ? "active" : ""}>Completed</Link> </li>
      </ul>
      </footer>
    </div>    
   </div>
 
  );
}