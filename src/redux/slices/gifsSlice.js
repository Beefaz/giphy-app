import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  allGifs: []
}

const gifSlice = createSlice({
  name: "gifsStore",
  initialState,
  reducers: {
    setGifs: (state, action) => {
      state.allGifs = action.payload;
    },
    lockGif: (state, action) => {
      state.allGifs[action.payload] = {...state.allGifs[action.payload], locked: true};
    },
    unlockGif: (state, action) => {
      state.allGifs[action.payload] = {...state.allGifs[action.payload], locked: false};
    }
  },
})

export const {setGifs, lockGif, unlockGif} = gifSlice.actions;
export const getAllGifs = (state) => state.gifsStore.allGifs;
export default gifSlice.reducer;
