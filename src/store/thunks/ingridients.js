import { createAsyncThunk } from "@reduxjs/toolkit";
import { getIngridientsApi } from "../../utils/api";

export const getIngridients = createAsyncThunk(
  "ingridients/get",
  getIngridientsApi
);
