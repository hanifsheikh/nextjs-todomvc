import { createContext, useContext } from "react"
type Todo = {
  id:number,
  title:string,
  completed:boolean
}
type TodoContext = {
   todos:Todo[],
   editingID:number,
   toggleTodo:(status: boolean, id: number) => void
   editTodo:(id: number) => void
   updateTodo:(id: number) => void
   deleteTodo:(id: number) => void
  }
export const TodoContext = createContext<TodoContext>({
  todos: [], 
  editingID:0,
  toggleTodo: () => {},
  editTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
  });
export const useTodoContext = () => useContext(TodoContext)
