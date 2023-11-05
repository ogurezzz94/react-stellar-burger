import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ingridientsReducer from "./ingridientsSlice";
import builderReducer from "./builderSlice";
import infoReducer from "./infoSlice";
import modalReducer from "./modalSlice";
import orderReducer from "./orderDetalsSlice";

const rootReducer = combineReducers({
  builder: builderReducer,
  ingridients: ingridientsReducer,
  info: infoReducer,
  modal: modalReducer,
  order: orderReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
