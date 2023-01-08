import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import _ from "lodash";
import { HYDRATE } from "next-redux-wrapper";

export const radioApi = createApi({
  reducerPath: "radioApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.BASE_API }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getTopRadio: builder.query({
      query: () => "stations/topclick",
      transformResponse: (response) => {
        return _.sampleSize(response, 15);
      },
    }),
  }),
});

export const {
  useGetTopRadioQuery,
  util: { getRunningQueriesThunk, resetApiState },
} = radioApi;

export const { getTopRadio } = radioApi.endpoints;
