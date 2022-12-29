import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type Todo = {
  title: string;
  completed: boolean;
  id: number;
};

const useTodoProcessor = () => {
  const router = useRouter();
  const [counter, setCount] = useState(0);
  let data: Todo[] = [];
  if (typeof window !== "undefined") {
    data = JSON.parse(localStorage.getItem("todos") || "[]");
  }
  const [todos, setTodos] = useState<Todo[]>([]);

  const [todoData, setTodoData] = useState<Todo[]>([...data]);

  const addTodo = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter") {
      return;
    }
    if (!(event.target as HTMLInputElement).value.trim().length) {
      return;
    }
    const newTodo = {
      id: Date.now(),
      title: (event.target as HTMLInputElement).value,
      completed: false,
    };
    setTodoData((prevTodos) => {
      localStorage.setItem("todos", JSON.stringify([...prevTodos, newTodo]));
      return [...prevTodos, newTodo];
    });
    (event.target as HTMLInputElement).value = "";
  };

  const toggleTodo = (status: boolean, id: number) => {
    const todo = todoData.find((todo) => todo.id === id);
    todo ? (todo.completed = status) : null;

    setTodoData((prevState) => [...todoData]);
    localStorage.setItem("todos", JSON.stringify(todoData));
  };

  const deleteTodo = (id: number) => {
    const todos = todoData.filter((todo) => todo.id !== id); 
    setTodoData((prevState) => {
      localStorage.setItem("todos", JSON.stringify([...todos]));
      return [...todos]
    });
  };

  useEffect(() => {
    const todoArray: Todo[] = [];

    todoData.map((todo) => {
      if (!todo.completed && router.pathname === "/active") {
        todoArray.push(todo);
      }
      if (todo.completed && router.pathname === "/completed") {
        todoArray.push(todo);
      }
      if (router.pathname === "/") {
        todoArray.push(todo);
      }
    });

    setTodos(() => todoArray);
    setCount(() => todoArray.length);
  }, [todoData, setCount, router, setTodos]);

  return { todos, counter, addTodo, toggleTodo, deleteTodo};
};

export default useTodoProcessor;
