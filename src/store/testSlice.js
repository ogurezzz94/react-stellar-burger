import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number: 1,
};

export const slice = createSlice({
  name: "plus",
  initialState,
  reducers: {
    plusNum: (state, action) => {
      state.number += action.payload;
    },
  },
});

export const { plusNum } = slice.actions;
export default slice.reducer;
