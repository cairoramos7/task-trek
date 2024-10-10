import { useAddTodo } from "@/services/todoService";
import { useForm } from "react-hook-form";

export const TodoForm = () => {
  const { register, handleSubmit } = useForm<Todo.TodoFormData>();

  const { mutate } = useAddTodo();

  const onSubmit = (values: Todo.TodoFormData) => {
    mutate(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <label className="flex flex-col">
        Title:
        <input
          {...register("title", {
            required: true,
          })}
          className="border border-gray-300 rounded-md p-2"
        />
      </label>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
      >
        Submit
      </button>
    </form>
  );
};
