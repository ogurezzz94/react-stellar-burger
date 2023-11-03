import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ingridientsReducer from "./ingridientsSlice";
import builderReducer from "./builderSlice";
import infoReducer from "./infoSlice";
import modalReducer from "./modalSlice";

const rootReducer = combineReducers({
  builder: builderReducer,
  ingridients: ingridientsReducer,
  info: infoReducer,
  modal: modalReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  // store.testCounter.object
});
