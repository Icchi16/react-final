import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  data: null,
};

const topClickRadioSlice = createSlice({
  name: "topClickRadio",
  initialState,
  reducers: {
    getTopClickRadio: (state, action) => {
      // todo handle client
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      // console.log("HYDRATE", action.payload.topClickRadio.data);
      state.data = action.payload.topClickRadio.data;
    });
  },
});

export const { getTopClickRadio } = topClickRadioSlice.actions;
export const selectTopClickRadio = (state) => state.topClickRadio;
export default topClickRadioSlice.reducer;
