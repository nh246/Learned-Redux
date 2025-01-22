import Peferences from "./components/Peferences";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen dark:bg-gray-800 dark:text-white ">
      <div>
        <TodoList />
        <Peferences />
      </div>
    </div>
  );
}

export default App;
