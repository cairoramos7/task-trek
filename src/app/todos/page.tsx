"use client";

import { useDeleteTodo, useFetchTodos } from "@/services/todoService";
import { TodoForm } from "./_components/form";

const TodoListPage = () => {
  const { isLoading, data: todos } = useFetchTodos();

  const { mutate } = useDeleteTodo();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Todos</h1>
      <TodoForm />
      <ul className="space-y-2">
        {todos?.map((todo) => (
          <li key={todo.id} className="flex items-center justify-between">
            <span className={`flex-1 ${todo.completed ? "line-through" : ""}`}>
              {todo.title}
            </span>
            <button
              type="button"
              className="px-2 text-lg text-gray-500 hover:text-red-500 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 focus:outline-1 focus:outline-red-500"
              onClick={() => {
                mutate({
                  id: todo.id,
                });
              }}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoListPage;
