import useFetch from "../hooks/useFetch";
export default function Home() {
  const {todos} = useFetch();
  return (
   <>   
   {todos.map(todo => (
     <li key={todo.id} className="relative">
      <input type="checkbox" className="toggle" /> 
      <label> {todo.title}</label>     
      </li>
     ))
   }
      </>
 
    );  
}