import Form from "./components/Form";
import TodosList from "./components/TodosList";

function App() {
   return (
    <div className="max-w-xl mt-10 m-auto max-sm:px-5">
        <Form />
        <TodosList />
    </div>
   )
}

export default App;
