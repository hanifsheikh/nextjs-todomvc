import useFetch from "../hooks/useFetch";
export default function Completed() {
  const {completedTodos} = useFetch();
  return (
 <>
 {completedTodos.map(todo => (
   <li key={todo.id}>{todo.title}</li>
   ))
 }
 </>
 
    );  
}