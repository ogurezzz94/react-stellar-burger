import { createSlice } from "@reduxjs/toolkit";
import { postOrder } from "./thunks/order";

export const orderSelector = (store) => store.order.number;

const initialState = {
  loading: true,
  error: false,
  errorMassage: "",
  number: null,
  name: "",
  success: false,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  extraReducers: {
    [postOrder.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.error = false;
      state.errorMassage = "";
      state.number = action.payload.order.number;
      state.name = action.payload.name;
      state.success = action.payload.success;
    },
    [postOrder.pending.type]: (state) => {
      state.number = '....'
      state.loading = true;
      state.error = false;
      state.errorMassage = "";
    },
    [postOrder.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = true;
      state.errorMassage = action.payload;
    },
  },
});

export default orderSlice.reducer;
