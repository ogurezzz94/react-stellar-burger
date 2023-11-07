import { createAsyncThunk } from "@reduxjs/toolkit";
import { checkResponse } from "../../utils/checkResponse";
import { BASE_URL } from "../../utils/baseUrl";

export const postOrder = createAsyncThunk(
  "order/post",
  async (payload, thunkAPI) => {
    const res = await fetch(`${BASE_URL}orders`, {
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
