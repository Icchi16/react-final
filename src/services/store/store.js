import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import { randomRadioReducer } from "../features/randomRadio/randomRadio.slice";

export const store = configureStore({
  reducer: {
    click: randomRadioReducer,
  },
});
