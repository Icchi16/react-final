import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { radioApi } from "../api/radioApi";

const makeStore = () =>
  configureStore({
    reducer: {
      [radioApi.reducerPath]: radioApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(radioApi.middleware),
  });

export const wrapper = createWrapper(makeStore);
