import { createSlice } from "@reduxjs/toolkit";
import { getIngridients } from "./thunks/ingridients";

export const ingridientsSelector = (store) => store.ingridients.data;
export const ingridientsIsLoading = (store) => store.ingridients.loading;

// это данные которые можно вытащить из стора

const initialState = {
  loading: true,
  error: false,
  errorMassage: "",
  data: null,
};

const ingridientsSlice = createSlice({
  name: "ingridients",
  initialState,
  extraReducers: {
    [getIngridients.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.error = false;
      state.errorMassage = "";
      state.data = action.payload.data;
    },
    [getIngridients.pending.type]: (state) => {
      state.loading = true;
      state.error = false;
      state.errorMassage = "";
    },
    [getIngridients.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = true;
      state.errorMassage = action.payload;
    },
  },
});

// export const { dataLoaded, dataLoading, dataError } = ingridientsSlice.actions;
// это экшаны которые управляют стором
export default ingridientsSlice.reducer;
