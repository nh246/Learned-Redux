import { configureStore } from '@reduxjs/toolkit'
import userApi from './features/user/useApi'

 const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
})


export default store