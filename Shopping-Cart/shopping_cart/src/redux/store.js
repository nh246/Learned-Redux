import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../redux/featurs/product/productSlice'
import createReducer from '../redux/featurs/cart/cartSlice'
 const store = configureStore({
  reducer: {
    product: productReducer,
    addtocart: createReducer,
  },
})

export default store