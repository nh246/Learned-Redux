// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home/Home.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import CartPage from "./pages/Carts/CartPage.jsx";
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<div>ProductPage</div>} />
          <Route path="/cart" element={<CartPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
