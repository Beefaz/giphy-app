import {configureStore} from "@reduxjs/toolkit";
import gifsReducer from "./slices/gifsSlice";

const store = configureStore({
  reducer: {
    gifsStore: gifsReducer,
  },
});

export default store;
