"use client";

import {
  useDeleteTodo,
  useFetchTodos,
  useToggleTodo,
} from "@/services/todoService";
import { TodoForm } from "./_components/form";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { SkeletonLoading } from "@/components/skeleton";

const TodoListPage = () => {
  const { isLoading, data: todos } = useFetchTodos();

  const { mutate: deleteTodo } = useDeleteTodo();
  const { mutate: toggleTodo } = useToggleTodo();

  if (isLoading) {
    return <SkeletonLoading />;
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Todo List
          </CardTitle>
        </CardHeader>
        <CardContent>
          <TodoForm />
          <ul className="space-y-2">
            {todos?.map((todo) => (
              <li key={todo.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`todo-${todo.id}`}
                  checked={todo.completed}
                  onCheckedChange={() =>
                    toggleTodo({
                      id: todo.id,
                      completed: !todo.completed,
                    })
                  }
                />
                <label
                  htmlFor={`todo-${todo.id}`}
                  className={`flex-grow cursor-pointer ${
                    todo.completed ? "line-through text-muted-foreground" : ""
                  }`}
                >
                  {todo.title}
                </label>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() =>
                    deleteTodo({
                      id: todo.id,
                    })
                  }
                  aria-label={`Delete todo: ${todo.title}`}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default TodoListPage;
