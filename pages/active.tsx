import useFetch from "../hooks/useFetch";
 
export default function Active() {
  const {todos} = useFetch();
  return (
   <>
    {todos.map((todo) => (       
     <li key={todo.id}>{todo.title}</li>
     ))
   }
   </>
  
    );  
}