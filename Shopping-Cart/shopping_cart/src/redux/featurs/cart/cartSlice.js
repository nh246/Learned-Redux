import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
    //   console.log(action.payload);
      const existingProduct = state.find(
        (product) => product.productId === action.payload.id
      );

      if (existingProduct) {
        alert("Product already in Cart!");
      } else {
        state.push({
          ...action.payload,
          id: Date.now(),
          quantity: 1,
          productId: action.payload.id,
        });
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
