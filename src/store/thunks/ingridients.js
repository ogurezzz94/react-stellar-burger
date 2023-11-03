import { createAsyncThunk } from "@reduxjs/toolkit";

export const getIngridients = createAsyncThunk(
  "ingridients/get",
  async (_, thunkAPI) => {
    const res = await fetch(
      "https://norma.nomoreparties.space/api/ingredients",
      { method: "GET" }
    );
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(
        `ошибка ответа сервера, статус: ${res.status}, ${res}`
      );
    }
  }
);
