import { createSlice } from "@reduxjs/toolkit";

export const infoSelector = (store) => store.info.item;

const initialState = {
  item: {},
};

const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    addInfo: (state, action) => {
      state.item = action.payload;
    },
    removeInfo: (state) => {
      state.item = null;
    },
  },
});

export const { addInfo, removeInfo } = infoSlice.actions;
export default infoSlice.reducer;
