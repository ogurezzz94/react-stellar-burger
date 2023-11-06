import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/baseUrl";
import { checkResponse } from "../../utils/checkResponse";

export const getIngridients = createAsyncThunk(
  "ingridients/get",
  async (_, thunkAPI) => {
    const res = await fetch(`${BASE_URL}ingredients`, { method: "GET" });
    return await checkResponse(res);
  }
);
