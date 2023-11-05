import { createAsyncThunk } from "@reduxjs/toolkit";

export const postOrder = createAsyncThunk(
  "order/post",
  async (payload, thunkAPI) => {
    const res = await fetch("https://norma.nomoreparties.space/api/orders", {
      method: "POST",
      body: JSON.stringify({
        ingredients: payload,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(
        `ошибка ответа сервера, статус: ${res.status}, ${res}`
      );
    }
  }
);
