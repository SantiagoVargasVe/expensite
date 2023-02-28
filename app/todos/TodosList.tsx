import { Todo } from "@/typing";
import Link from "next/link";

const fetchTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: Todo[] = await res.json();
  return todos;
};

async function TodosList() {
  const todos = await fetchTodos();

  return (
    <>
      {todos.map((todo) => (
        <p className="" key={todo.id}>
          <Link href={`/todos/${todo.id}`}> Todo: {todo.id}</Link>
        </p>
      ))}
    </>
  );
}

export default TodosList;
