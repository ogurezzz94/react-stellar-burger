import { createSlice } from "@reduxjs/toolkit";

export const modalInfoSelector = (store) => store.modal.info;
export const modalPurchaseSelector = (store) => store.modal.purchase;

const initialState = {
  info: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModalInfo: (store) => {
      store.info = true;
    },
    openPurchaseModal: (store) => {
      store.purchase = true;
    },
    closeModal: (store) => {
      store.info = false;
      store.purchase = false;
    },
  },
});

export const { openModalInfo, openPurchaseModal, closeModal } =
  modalSlice.actions;
export default modalSlice.reducer;
