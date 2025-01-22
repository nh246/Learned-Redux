import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../redux/featurs/todos/todoSlice";
import preferenceReducer from '../redux/featurs/preferences/preferenceSlice'


const store = configureStore({
  reducer: {
    todos: todoReducer,
    performances:preferenceReducer,
  },
});

export default store;
