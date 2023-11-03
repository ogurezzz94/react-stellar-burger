import { createSlice } from "@reduxjs/toolkit";

export const modalSelector = (store) => store.modal.isOpen;

const initialState = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (store) => {
      store.isOpen = !store.isOpen;
    },
    closeModal: (store) => {
      store.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
