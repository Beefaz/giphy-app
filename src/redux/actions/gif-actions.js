import { ActionTypes } from "../constants/action-types";

export const setGifs = (gifs) => {
  return {
      type: ActionTypes.SET_GIFS,
      payload: gifs,
  };
};

export const selectedGif = (gif) => {
  return {
    type: ActionTypes.SELECTED_GIF,
    payload: gif,
  };
};
