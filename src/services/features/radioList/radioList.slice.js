import { createAsyncThunk } from "@reduxjs/toolkit";

export const loadRadio = createAsyncThunk(
  "radioList/loadRadioList",
  async (args, thunkApi) => {
    console.log(thunkApi);
    const res = await fetch("");
    const data = await res.json();

    return data;
  }
);
