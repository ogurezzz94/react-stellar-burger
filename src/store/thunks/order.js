import { createAsyncThunk } from "@reduxjs/toolkit";
import { postOrderApi } from "../../utils/api";

export const postOrder = createAsyncThunk("order/post", postOrderApi);
