import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
 

type Todo = {
  title: string,
  completed:boolean,
  id: number,  
}
 
const useFetch = () => {
  const router = useRouter();
  const [counter, setCount]  = useState(0);
  const [todos, setTodos] = useState<Todo[]>([]); 
  const todoData: Todo [] = useMemo(
    () => [
      {
        title: "Todo One",
        completed: false,
        id: 1,
      },
      {
        title: "Todo Two",
        completed: false,
        id: 2,
      },
      {
        title: "Todo Three",
        completed: false,
        id: 3,
      },
      {
        title: "Todo Four",
        completed: false,
        id: 4,
      },
      {
        title: "Todo Five",
        completed: true,
        id: 5,
      },
      {
        title: "Todo Six",
        completed: false,
        id: 6,
      },
    ],
    []
  );

  useEffect(() => {
    const todoArray:Todo[] = []; 
    todoData.map((todo) => {
      if (!todo.completed && router.pathname === "/active") {
        todoArray.push(todo);
      } 
      if (todo.completed && router.pathname === "/completed"){
        todoArray.push(todo);        
      }
     if (router.pathname === "/") {
        todoArray.push(todo);   
      }
    });
    setTodos(todoArray)
    setCount(todoArray.length)
  }, [todoData, setCount, router, setTodos]);

  return { todos, counter };
};

export default useFetch;
