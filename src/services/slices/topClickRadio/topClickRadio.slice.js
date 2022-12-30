import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  data: [],
};

const topClickRadioSlice = createSlice({
  name: "topClickRadio",
  initialState,
  reducers: {
    getTopClickRadio: (state, action) => {
      const data = axios.get(process.env.TOP_CLICK);
      console.log(data);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      state.data = action.payload.topClickRadio.data;
    });
  },
});

export const { getTopClickRadio } = topClickRadioSlice.actions;
export const selectTopClickRadio = (state) => state.topClickRadio;
export default topClickRadioSlice.reducer;
