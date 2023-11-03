import { configureStore } from "@reduxjs/toolkit";
import testSlice from "./testSlice";
import ingridientsReducer from "./ingridientsSlice";

export const store = configureStore({
  reducer: { testCounter: testSlice, ingridients: ingridientsReducer },
  // store.testCounter.object
});
