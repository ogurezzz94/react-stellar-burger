import { createSlice } from "@reduxjs/toolkit";

export const sectionSelector = (store) => store.scroll;

const initialState = {
  bun: true,
  sauce: false,
  main: false,

  index: NaN,
  str: "",
};

const scrollSlice = createSlice({
  name: "scroll",
  initialState,
  reducers: {
    // togglebun: (store) => {
    //   store.section.bun = !store.section.bun;
    // },
    // togglesauce: (store) => {
    //   store.section.sauce = !store.section.sauce;
    // },
    // togglemain: (store) => {
    //   store.section.main = !store.section.main;
    // },
    toggle: (store, action) => {
      store[`${action.payload}`] = !store[`${action.payload}`];
    },
    toggleIn: (store, action) => {
      store[`${action.payload}`] = true;
    },
    toggleOut: (store, action) => {
      store[`${action.payload}`] = false;
    },
  },
});

export default scrollSlice.reducer;
export const {
  togglebun,
  togglesauce,
  togglemain,
  toggle,
  toggleIn,
  toggleOut,
} = scrollSlice.actions;
