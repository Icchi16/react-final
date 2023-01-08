import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import topClickRadioReducer from "../slices/topClickRadio/topClickRadio.slice";
import { radioApi } from "../api/radioApi";

const makeStore = () =>
  configureStore({
    reducer: {
      [radioApi.reducerPath]: radioApi.reducer,
    },
    middleware: (gDM) => gDM().concat(radioApi.middleware),
  });

export const wrapper = createWrapper(makeStore);
