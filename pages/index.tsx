import {useTodoContext} from "../context/TodoContext";
export default function Home() { 
  const {todos, toggleTodo, deleteTodo, editTodo, editingID, updateTodo} = useTodoContext(); 
  return (
   <>   
      { todos.map(todo => (
        <li key={todo.id} className="relative">
        <input key={Math.random()} type="checkbox" className="toggle" defaultChecked={todo.completed} onChange={(e) => toggleTodo(e.target.checked, todo.id)} /> 
       {editingID === todo.id ?
       

         <input className="edit outline-none" type="text" value={todo.title} onChange={(e)=>todo.title = e.target.value} />    
      
       :
       <>       
       <label onClick={(e) =>  e.detail === 2 ? editTodo(todo.id) : null } className={todo.completed ? "line-through text-gray-400" : ""}> {todo.title}</label>    
        <button onClick={() => deleteTodo(todo.id)} className="delete"></button> 
       </>
       }
        </li>
        ))
      }
      </> 
    );  
}
