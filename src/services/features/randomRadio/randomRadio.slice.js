import { createSlice } from "@reduxjs/toolkit";
import { random } from "lodash";

const initialState = {
  data: "Duy",
};

export const randomRadioSlice = createSlice({
  name: "randomRadio",
  initialState,
  reducers: {
    click: (state, action) => {
      console.log(`Hello ${state.data}`);
    },
  },
});

export const { click } = randomRadioSlice.actions;

export const randomRadioReducer = randomRadioSlice.reducer;
