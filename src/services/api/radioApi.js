import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const radioApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.BASE_API }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: () => "/",
    }),
  }),
});

export const {
  useGetPokemonByNameQuery,
  util: { getRunningQueriesThunk, resetApiState },
} = radioApi;

export const { getPokemonByName } = radioApi.endpoints;
