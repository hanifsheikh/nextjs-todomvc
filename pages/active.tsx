import useFetch from "../hooks/useFetch";
 
export default function Active() {
  const {activeTodos} = useFetch();
  return (
    <ul className="todo-list text-3xl font-light text-gray-800">
    {activeTodos.map((todo) => (       
      <li key={todo?.id}>{todo?.title}</li>
      ))
    }
    </ul>
    );  
}