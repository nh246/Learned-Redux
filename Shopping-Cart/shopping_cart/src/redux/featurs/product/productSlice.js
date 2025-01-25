import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "t-shirt",
    price: 100,
    category: "Gagets",
    image:
      "https://plus.unsplash.com/premium_photo-1718913931807-4da5b5dd27fa?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "2023-01-01",
  },
  {
    id: 2,
    name: "B-shirt",
    price: 175,
    category: "kapor",
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dCUyMHNoaXJ0fGVufDB8fDB8fHww",
    date: "2023-01-01",
  },
  {
    id: 3,
    name: "C-shirt",
    price: 200,
    category: "khelna",
    image: "https://images.unsplash.com/photo-1618354691438-25bc04584c23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
    date: "2023-01-01",
  },
];

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.push({
        id: state.length > 0 ? state[state.length - 1].id : 1,
        ...action.payload,
      });
    },
  },
});

export const { addProduct } = productSlice.actions;

export default productSlice.reducer;
