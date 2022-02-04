import { ActionTypes } from "../constants/action-types";

const initialState = {
  gifs: [],
}
export const gifReducer = (state, {type, payload}) => {
  switch (type) {
    case ActionTypes.SET_GIFS:
      return state;
    default:
      return initialState;
  }
}
