import { combineReducers } from "redux";
import { gifReducer } from "./product-reducer";

export const reducers = combineReducers({
  allGifs: gifReducer,
});
