import useFetch from "../hooks/useFetch";
export default function Home() {
  const {todos} = useFetch();
  return (
  <ul className="todo-list text-3xl font-light text-gray-800">
    {todos.map(todo => (
      <li key={todo.id}>{todo.title}</li>
      ))
    }
    </ul>
    );  
}