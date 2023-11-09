import { createSlice } from "@reduxjs/toolkit";

export const titleSelector = (store) => store.titles;

const initialState = {
  bun: "Булки",
  sauce: "Соус",
  main: "Начинки",
  data: [
    { ru: "Булки", en: "bun" },
    { ru: "Соусы", en: "sauce" },
    { ru: "Начинки", en: "main" },
  ],
};

const titlesSlice = createSlice({
  name: "titles",
  initialState,
  reducers: {},
});

export default titlesSlice.reducer;
