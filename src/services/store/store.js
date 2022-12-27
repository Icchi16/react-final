import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { radioApi } from "../slices/radioApi/radioApi.slice";
import topClickRadioReducer from "../slices/topClickRadio/topClickRadio.slice";

// export const makeStore = configureStore({
//   reducer: {
//     [radioApi.reducerPath]: radioApi.reducer,
//   },
//   middleware: (gDM) => gDM().concat(radioApi.middleware),
// });

// export const wrapper = createWrapper(makeStore, { debug: true });

const makeStore = () =>
  configureStore({
    reducer: {
      topClickRadio: topClickRadioReducer,
    },
  });

export const wrapper = createWrapper(makeStore);
