import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import { randomRadioReducer } from "../features/randomRadio/randomRadio.slice";

const createStore = (preloadedState) => {
  return configureStore({
    reducer: {
      click: randomRadioReducer,
    },
    preloadedState,
  });
};

let store;
export const initializeStore = (preloadedState) => {
  let _store = store ?? createStore(preloadedState);
  if (preloadedState && store) {
    _store = createStore({ ...store.getState(), ...preloadedState });
    store = undefined;
  }

  if (typeof window === "undefined") {
    return _store;
  } else if (!store) {
    store = _store;
  }
  return _store;
};

export const store = configureStore({
  reducer: {
    click: randomRadioReducer,
  },
});
