import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Reducer/counterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
