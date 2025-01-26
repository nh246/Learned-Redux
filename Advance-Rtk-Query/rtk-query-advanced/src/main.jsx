// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import User from "./component/User.jsx";
import Home from "./component/Home.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home/>} />
          <Route path="/users" element={<User />} />
          <Route path="/add_user" element={<div>add user</div>} />
          <Route path="/edit_user" element={<div>Edit user</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
