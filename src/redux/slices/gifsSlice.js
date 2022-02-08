import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {sortByDateParam} from "../../helpers/sort-by-date-param";
import {filterObjectProperties} from "../../helpers/filter-object-properties";
import {gifCookieHandler} from "../../helpers/gif-cookie-handler";
import {randomizeKeepingLockedPos} from "../../helpers/randomize-keeping-locked-pos";

export const fetchGifs = createAsyncThunk('fetchGifs', async () => {
  const randomQuery = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 1);
  const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=f5hp3qYikfuNpEWmJfYECuJ5EmGMK7dZ&q=${randomQuery}&limit=12&offset=0&rating=g&lang=en`)
    .then((response) => response.json());
  return response.data;
})

const gifSlice = createSlice({
  name: "gifsStore",
  initialState: {
    allGifs: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    shuffleGifs: (state, ) => {
      state.allGifs = randomizeKeepingLockedPos(state.allGifs);
    },
    lockGif: (state, {payload}) => {
      state.allGifs[payload.position] = payload;
      gifCookieHandler(payload);
    },
    unlockGif:
      (state, {payload}) => {
        state.allGifs[payload.position] = payload;
        gifCookieHandler(payload);
      }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchGifs.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGifs.fulfilled, (state, {payload}) => {
        const cleanedGifData = filterObjectProperties(
          payload,
          ['id', 'images', 'import_datetime']
        );
        let sortedGifs = sortByDateParam(cleanedGifData, 'import_datetime');
        sortedGifs = sortedGifs.map((item, index) => {
          return {...item, position: index, locked: false}
        })

        const cookieData = JSON.parse(localStorage.getItem('locked-gifs'));
        if (cookieData) {
          const lockedPositions = cookieData.map(item => item.position);
          sortedGifs = sortedGifs.map((item, index) => {
            if (!lockedPositions.includes(index)) {
              return {...item, position: index};
            }
            return {...cookieData.find(item => item.position === index), position: index}
          })
        }
        state.allGifs = sortedGifs;
        state.status = 'succeeded';
      })
      .addCase(fetchGifs.rejected, (state, {payload}) => {
        state.status = 'failed';
        state.error = payload.error.message;
      })
  }
})

export const {shuffleGifs, lockGif, unlockGif} = gifSlice.actions;
export const getAllGifs = (state) => state.gifsStore.allGifs;
export default gifSlice.reducer;
