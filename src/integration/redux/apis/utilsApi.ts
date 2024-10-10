// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseApi, token, variables } from "../../../utilities/constants";

// Define a service using a base URL and expected endpoints
export const utilsApi = createApi({
  reducerPath: "utilsApi",
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
    presignedUrl: builder.query<any, any>({
      query: ({ filename, filetype, filepath }) => ({
        url: `utils/presigned-url?filename=${filename}&filetype=${filetype}&filepath=${filepath}`,
        method: "get",
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLazyPresignedUrlQuery } = utilsApi;
