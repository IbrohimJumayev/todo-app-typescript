import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getFromLocalStorage, saveToLocalStorage } from "../../utils";

interface TodoItem {
  id: string;
  isDone: boolean;
  text: string;
}

interface TodosState {
  todos: TodoItem[];
  newTodo: string;
}

const initialState: TodosState = {
  todos: getFromLocalStorage("todos") ?? [],
  newTodo: "",
};

const TodosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add: (state) => {
      if (state.newTodo.trim()) {
        const newTodoItem: TodoItem = {
          id: Date.now().toString(),
          isDone: false,
          text: state.newTodo,
        };
        state.todos.push(newTodoItem);
        saveToLocalStorage('todos', state.todos)
        state.newTodo = "";
      }
    },
    toggleDone: (state, action: PayloadAction<string>) => {
      const doneTodo = state.todos.find((t) => t.id === action.payload);
      if (doneTodo) {
        doneTodo.isDone = !doneTodo.isDone;
        saveToLocalStorage('todos', state.todos)
      }

    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
      saveToLocalStorage('todos', state.todos)
     
    },
    setNewTodo: (state, action: PayloadAction<string>) => {
      state.newTodo = action.payload
    }
  },
});


export const {add, toggleDone, deleteTodo, setNewTodo} = TodosSlice.actions
export default TodosSlice.reducer
