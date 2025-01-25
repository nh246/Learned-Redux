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
    increaseQuantity: (state, action) => {
      const product = state.find((product) => product.id === action.payload);
      if (product) {
        product.quantity++;
      }
    },

    // decrement quantity
    decreaseQuantity: (state, action) => {
      const product = state.find((product) => product.id === action.payload);
      if (product && product.quantity > 1) {
        product.quantity--;
      }
    },

    // remove from cart
    removeFromCart: (state, action) => {
      return state.filter((product) => product.id !== action.payload);
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
