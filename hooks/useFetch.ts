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
  const [activeTodos, setActiveTodos] = useState([{id:0, completed:false, title:""}]);
  const [completedTodos, setCompletedTodos]  = useState([{id:0, completed:false, title:""}]);
  let todos = useMemo(
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
        completed: true,
        id: 3,
      },
      {
        title: "Todo Four",
        completed: true,
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
    const activeTodoArray:Todo[] = [];
    const completedTodoArray:Todo[] = [];
    todos.map((todo) => {
      if (!todo.completed) {
        activeTodoArray.push(todo);
      } else {
        completedTodoArray.push(todo);
      }
    });

    setActiveTodos(activeTodoArray);
    setCompletedTodos(completedTodoArray);
    
    switch (router.pathname) {
      case '/':
        setCount(todos.length)
        break;
        case '/active':
        setCount(activeTodoArray.length)
         break;
       case '/completed':
        setCount(completedTodoArray.length)
        break;  
      default:
        break;
    }
  }, [todos, setActiveTodos, setCompletedTodos, setCount, router]);

  return { todos, activeTodos, completedTodos, counter };
};

export default useFetch;
