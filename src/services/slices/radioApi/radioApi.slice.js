// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
// import { HYDRATE } from "next-redux-wrapper";

// export const radioApi = createApi({
//   baseQuery: fetchBaseQuery({
//     baseUrl: process.env.BASE_API,
//   }),
//   extractRehydrationInfo(action, { reducerPath }) {
//     if (action.type === HYDRATE) {
//       return action.payload[reducerPath];
//     }
//   },
//   tagTypes: [],
//   endpoints: (builder) => ({
//     getRadioList: builder.query({
//       query: () => `${process.env.TOP_CLICK}`,
//     }),
//   }),
// });

// export const {
//   useGetRadioListQuery,
//   util: { getRunningQueryThunk },
// } = radioApi;

// export const { getRadioList } = radioApi.endpoints;
