import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import topClickRadioReducer from "../slices/topClickRadio/topClickRadio.slice";

const makeStore = () =>
  configureStore({
    reducer: {
      topClickRadio: topClickRadioReducer,
    },
  });

export const wrapper = createWrapper(makeStore);
