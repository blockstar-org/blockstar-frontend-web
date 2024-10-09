// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseApi, token, variables } from "../../../utilities/constants";

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: "userApi",
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
    getUser: builder.query<void, void>({
      query: () => ({
        url: `auth/user`,
        method: "get",
      }),
    }),
    updateUser: builder.mutation<any, any>({
      query: (payload) => ({
        url: `auth/user?`,
        method: "PATCH",
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserQuery, useUpdateUserMutation } = userApi;
