import { createSlice } from "@reduxjs/toolkit";
import { random } from "lodash";

const initialState = {
  data: "hello",
};

export const randomRadioSlice = createSlice({
  name: "randomRadio",
  initialState,
  reducers: {
    click: (state) => {
      console.log(state.data);
    },
  },
});

export const { click } = randomRadioSlice.actions;

export default randomRadioSlice.reducer;
