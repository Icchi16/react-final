import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

const radioApi = createApi({
  reducerPath: "radioApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.}),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({getTopRadio: builder.query{}}),
});
