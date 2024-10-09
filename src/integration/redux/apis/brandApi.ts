// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseApi, token, variables } from "../../../utilities/constants";

// Define a service using a base URL and expected endpoints
export const brandApi = createApi({
  reducerPath: "brandApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseApi}`,
    prepareHeaders: (headers, { getState }) => {
      // Get token from the Redux store (for example)

      // Add an Authorization header if the token is available
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getBrandInfo: builder.query<any, void>({
      query: (): any => ({
        url: `brand`,
        method: "get",
      }),
    }),
    getPersona: builder.query<any, any>({
      query: ({ _id }) => ({
        url: `brand/persona?_id=${_id}`,
        method: "get",
      }),
    }),
    getVoiceTone: builder.query<any, void>({
        query: () => ({
          url: `brand/voice-tone`,
          method: "get",
        }),
      }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetBrandInfoQuery, useLazyGetPersonaQuery , useGetVoiceToneQuery} = brandApi;
