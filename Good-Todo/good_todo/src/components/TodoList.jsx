import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo ,removeTodo,toggleTodo} from "../redux/featurs/todos/todoSlice";
function TodoList() {
  const todos = useSelector((state) => state.todos);

  // console.log(todos);

  const [text, setText] = useState("")
 
  const dispatch = useDispatch()
  const handleTodos=()=>{
    if(text.trim()){
      dispatch(addTodo(text))
      setText("")
    }
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-xl font-bold">Todo List App</h2>
      <div className=" flex space-x-2">
        <input 
        value={text}
        onChange={(e)=>setText(e.target.value)}
          type="text"
          placeholder="Add a todo.."
          className=" px-4 py-2 text-black border border-gray-300 rounded placeholder:text-black"
        />
        <button onClick={handleTodos} className="px-2 py-2 bg-green-500 text-white hover:bg-green-700 rounded ">
          ADD
        </button>
      </div>
      <div>
        <ul className="w-full max-w-md">
          {todos.length > 0 ? 
            todos.map((todo) => (
              <li key={todo.id} className="flex justify-start items-center border-b cursor-pointer px- py-2 space-x-2">
                <span onClick={()=>dispatch(toggleTodo(todo.id))} className={`${todo.completed ? "line-through" : ""}` } >{todo.text}</span>
                <button onClick={()=>dispatch(removeTodo(todo.id))} className="text-red-500 hover:underline">Remove</button>
              </li>
            ))
           : 
            <li>No todos found</li>
          }
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
