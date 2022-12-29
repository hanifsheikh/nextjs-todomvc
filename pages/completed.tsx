import useFetch from "../hooks/useFetch";
export default function Completed() {
  const {todos} = useFetch();
  return (
 <>
 {todos.map(todo => (
   <li key={todo.id}>{todo.title}</li>
   ))
 }
 </>
 
    );  
}