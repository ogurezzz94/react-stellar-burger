import { createAsyncThunk } from "@reduxjs/toolkit";
import { checkResponse } from "../../utils/checkResponse";

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
    return await checkResponse(res);
  }
);
