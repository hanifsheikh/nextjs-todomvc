import useFetch from "../hooks/useFetch";
export default function Completed() {
  const {completedTodos} = useFetch();
  return (
  <ul className="todo-list text-3xl font-light text-gray-800">
    {completedTodos.map(todo => (
      <li key={todo.id}>{todo.title}</li>
      ))
    }
    </ul>
    );  
}