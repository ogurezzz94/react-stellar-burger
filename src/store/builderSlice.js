import { createSlice } from "@reduxjs/toolkit";
import { v4 as uniqId } from "uuid";

export const builderSelector = (store) => store.builder.data;
export const bunBuilderSelector = (store) => store.builder.data.bun;
export const mainBuilderSelector = (store) => store.builder.data.main;
export const priceSelector = (store) => store.builder.totalPrice;

const initialState = {
  data: {
    bun: null,
    main: [],
  },
  productQty: null,
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
      const item = { ...action.payload, uniqId: uniqId() };
      if (store.data.bun) store.data.main.push(item);
    },
    countPrice: (store) => {
      store.totalPrice =
        store.data.main?.reduce((acc, item) => acc + item?.price, 0) +
        (store.data.bun ? store.data.bun.price * 2 : 0);
    },
    deleteItem: (store, action) => {
      store.data.main = store.data.main.filter(
        (e) => e.uniqId !== action.payload.uniqId
      );
    },
  },
});

export const { addBun, addMain, countPrice, deleteItem } = builderSlice.actions;
export default builderSlice.reducer;
