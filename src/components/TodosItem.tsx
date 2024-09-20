import { useDispatch } from "react-redux";
import { deleteTodo, toggleDone } from "../store/slices/TodosSlice";

interface TodosItems {
  id: string;
  title: string;
  isDone: boolean;
}

const TodosItem = ({ id, title, isDone }: TodosItems) => {
  const dispatch = useDispatch();
  return (
    <li className="flex justify-between items-center text-lg sm:text-xl" key={id}>
      <p
        style={{
          color: isDone ? "green" : "",
          textDecoration: isDone ? "line-through" : "",
        }}
      >
        {title}
      </p>
      <div
        className="flex gap-2
       sm:gap-5 items-center"
      >
        <button
          className="active:scale-75 duration-300"
          onClick={() => dispatch(toggleDone(id))}
        >
          <span className="material-symbols-outlined">check</span>
        </button>
        <button
          className="active:scale-75 duration-300"
          onClick={() => dispatch(deleteTodo(id))}
        >
          <span className="material-symbols-outlined">delete</span>
        </button>
      </div>
    </li>
  );
};

export default TodosItem;
