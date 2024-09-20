import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import TodosItem from "./TodosItem";

const TodosList = () => {
    const todos = useSelector((state: RootState) => state.todos.todos)
  return (
    <div className="mt-5 ">
      <h1 className="text-xl sm:text-2xl mb-3 sm:mb-5">
        Todos - <span className="text-blue-500">{todos.length}</span>
      </h1>
      <ul>
        {todos.map((t) => (
            <TodosItem id={t.id} title={t.text} isDone={t.isDone}/>
        ))}
      </ul>
    </div>
  );
};

export default TodosList;
