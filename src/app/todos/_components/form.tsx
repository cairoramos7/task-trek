import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAddTodo } from "@/services/todoService";
import { useForm } from "react-hook-form";

export const TodoForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<Todo.TodoFormData>();

  const { mutate } = useAddTodo();

  const onSubmit = (values: Todo.TodoFormData) => {
    mutate(values);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex space-x-2 mb-4">
      <Input
        type="text"
        placeholder="Add a new todo"
        disabled={isSubmitting}
        {...register("title", {
          required: true,
        })}
      />
      <Button type="submit" disabled={isSubmitting}>
        Add
      </Button>
    </form>
  );
};
