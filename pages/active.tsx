import useFetch from "../hooks/useFetch";
 
export default function Active() {
  const {activeTodos} = useFetch();
  return (
   <>
    {activeTodos.map((todo) => (       
     <li key={todo?.id}>{todo?.title}</li>
     ))
   }
   </>
  
    );  
}