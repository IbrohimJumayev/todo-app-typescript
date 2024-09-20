import { ChangeEvent, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, setNewTodo } from "../store/slices/TodosSlice";
import { RootState } from "../store/store";

const Form = () => {
  const newTodo = useSelector((state: RootState) => state.todos.newTodo);
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(add());
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setNewTodo(e.target.value));
  };
  return (
    <form className="flex justify-between gap-5 items-center">
      <input
        value={newTodo}
        onChange={handleInputChange}
        className="w-full border border-black px-4 py-2 outline-none focus:text-white focus:bg-blue-500 duration-300"
        type="text"
        placeholder="Enter a task...."
      />
      <button
        onClick={handleSubmit}
        className="border border-black px-4 py-2 active:scale-75 duration-300
      "
      >
        add
      </button>
    </form>
  );
};

export default Form;
