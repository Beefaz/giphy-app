import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allGifs: {}
}

const gifSlice = createSlice({
    name: "gifsStore",
    initialState,
    reducers: {
      setGifs: (state, action) => {
        state.allGifs = action.payload;
      }
    },
})

export const { setGifs } = gifSlice.actions;
export const getAllGifs = (state) => state.gifsStore.allGifs;
export default gifSlice.reducer;
