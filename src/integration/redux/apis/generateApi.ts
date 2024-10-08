// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseApi, variables } from "../../../utilities/constants";

// Define a service using a base URL and expected endpoints
export const generateApi = createApi({
  reducerPath: "generateApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseApi}`,
    prepareHeaders: (headers, { getState }) => {
      // Get token from the Redux store (for example)
      const token = localStorage.getItem(variables.accessToken);

      // Add an Authorization header if the token is available
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    generateVideo: builder.mutation<any, any>({
      query: (payload) => ({
        url: `Video/generate-script`,
        method: "post",
        body: payload
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGenerateVideoMutation } = generateApi;
