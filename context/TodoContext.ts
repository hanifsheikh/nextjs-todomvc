import { createContext, useContext } from "react"
type Todo = {
  id:number,
  title:string,
  completed:boolean
}
type TodoContext = {
   todos:Todo[],
   toggleTodo:(status: boolean, id: number) => void
   deleteTodo:(id: number) => void
  }
export const TodoContext = createContext<TodoContext>({
  todos: [], 
  toggleTodo: () => {},
  deleteTodo: () => {}
  });
export const useTodoContext = () => useContext(TodoContext)
