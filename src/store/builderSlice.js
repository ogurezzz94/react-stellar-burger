import { createSlice } from "@reduxjs/toolkit";

export const builderSelector = (store) => store.builder.data;
export const bunBuilderSelector = (store) => store.builder.data.bun;
export const mainBuilderSelector = (store) => store.builder.data.main;
export const priceSelector = (store) => store.builder.totalPrice;

const initialState = {
  data: {
    bun: null,
    main: [],
  },
  totalPrice: 0,
};

const builderSlice = createSlice({
  name: "builder",
  initialState,
  reducers: {
    addBun: (store, action) => {
      store.data.bun = action.payload;
    },
    addMain: (store, action) => {
      if (store.data.bun) store.data.main.push(action.payload);
    },
    countPrice: (store) => {
      store.totalPrice =
        store.data.main?.reduce((acc, item) => acc + item?.price, 0) +
        (store.data.bun ? store.data.bun.price * 2 : 0);
    },
  },
});

export const { addBun, addMain, countPrice } = builderSlice.actions;
export default builderSlice.reducer;
