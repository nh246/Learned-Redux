import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../redux/featurs/weather/weatherSlice";
import { thunk } from "redux-thunk";
import { createLogger } from "redux-logger";

const logger = createLogger();

const store = configureStore({
  reducer: {
    Weather: weatherReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk, logger),
});

export default store;
