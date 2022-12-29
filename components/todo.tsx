import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import useTodoProcessor from "../hooks/useTodoProcessor";
import {TodoContext} from "../context/TodoContext";
export default function Todo({ props }: {props: React.ReactNode}) {

  const router = useRouter();
  const {counter, todos, addTodo, toggleTodo, deleteTodo} = useTodoProcessor();

  return (  
    <div className="container mx-auto grid mt-10">
    <div className="card bg-white w-[480px] justify-self-center">      
      <input id="toggle-all" type="checkbox" className="toggle-all" />
      <label htmlFor="toggle-all"> </label>
      <input onKeyUp={(e) => addTodo(e)} placeholder="What need to be done?" type="text" className="pl-14 w-full px-5 py-3 outline-none text-2xl font-light text-gray-800 border-b border-[#e6e6e6]" />
       <ul className="todo-list text-2xl font-light text-gray-800">
        <TodoContext.Provider value={{todos, toggleTodo, deleteTodo}}>
            {props}
        </TodoContext.Provider>
        </ul>
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