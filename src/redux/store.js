import { configureStore } from "@reduxjs/toolkit";
import quarterReducer from "./StoreSlice";

const store = configureStore({
  reducer: {
    tracker: quarterReducer,
  },
});

export default store;
