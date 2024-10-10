// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseApi, token, variables } from "../../../utilities/constants";

// Define a service using a base URL and expected endpoints
export const scriptApi = createApi({
  reducerPath: "scriptApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseApi}`,
    prepareHeaders: (headers, { getState }) => {
      // Get token from the Redux store (for example)
      const token =
      localStorage.getItem(variables.accessToken) ||
      sessionStorage.getItem(variables.accessToken);
      // Add an Authorization header if the token is available
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getGeneratedVideo: builder.query<void, any>({
      query: ({ scriptId }) => ({
        url: `video/script/${scriptId}`,
        method: "get",
      }),
    }),
    updateScript: builder.mutation<any, any>({
      query: ({ scriptId, payload }) => ({
        url: `video/script/${scriptId}`,
        method: "PATCH",
        body: payload
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetGeneratedVideoQuery, useUpdateScriptMutation } = scriptApi;
