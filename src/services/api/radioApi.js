import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
import { getTopClickRadio } from "../slices/topClickRadio/topClickRadio.slice";

const radioApi = createApi({
  reducerPath: "radioApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.BASE_API }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({ getTopClickRadio: builder.query({query: name => }) }),
});
