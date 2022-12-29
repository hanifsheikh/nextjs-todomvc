import {useTodoContext} from "../context/TodoContext";
export default function Completed() { 
  const {todos, toggleTodo} = useTodoContext(); 
  return (
   <>   
      { todos.map(todo => (
        <li key={todo.id} className="relative">
        <input type="checkbox" className="toggle" defaultChecked={todo.completed} onChange={(e) => toggleTodo(e.target.checked, todo.id)} /> 
        <label className={todo.completed ? "line-through text-gray-500" : ""}> {todo.title}</label>     
        </li>
        ))
      }
      </> 
    );  
}
