import { createSlice } from "@reduxjs/toolkit";

export const ingridientsSelector = (store) => store.ingridients.data;
export const ingridientsIsLoading = (store) => store.ingridients.loading;

// это данные которые можно вытащить из стора

const initialState = {
  loading: false,
  error: false,
  errorMassage: "",
  data: null,
};

const ingridientsSlice = createSlice({
  name: "ingridients",
  initialState,
  reducers: {
    dataLoading: (state) => {
      state.loading = true;
      state.error = false;
    },
    dataLoaded: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    dataError: (state, action) => {
      state.loading = false;
      state.error = true;
      state.errorMassage = action.payload;
    },
  },
});

export const { dataLoaded, dataLoading, dataError } = ingridientsSlice.actions;
// это экшаны которые управляют стором
export default ingridientsSlice.reducer;
