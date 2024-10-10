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
      console.log({token});
      
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }else {
        // window.location.reload()
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
      transformErrorResponse: (response: any) => {
        // If the response has an error, you can throw it or return a custom error
        if (response?.status == 401 || response?.status == 429) {
          // window.location.reload();
        }
      },
      
    }),
    getPersona: builder.query<any, any>({
      query: ({ _id }) => ({
        url: `brand/persona?_id=${_id}`,
        method: "get",
      }),
      transformErrorResponse: (response: any) => {
        // If the response has an error, you can throw it or return a custom error
        if (response?.status == 401 || response?.status == 429) {
          window.location.reload();
        }
      },
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
export const {
  useGetBrandInfoQuery,
  useLazyGetPersonaQuery,
  useGetVoiceToneQuery,
} = brandApi;
