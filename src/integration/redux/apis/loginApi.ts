// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseApi, variables } from "../../../utilities/constants";

// Define a service using a base URL and expected endpoints
export const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${baseApi}` }),
  endpoints: (builder) => ({
    login: builder.mutation<any, any>({
      query: (payload) => ({
        url: `auth/user/login`,
        method: "post",
        body: payload,
      }),
    }),
    logOut: builder.mutation<void, void>({
      query: (payload) => ({
        url: `auth/user/logout`,
        method: "post",
        headers: {
          Authorization: `Bearer ${localStorage.getItem(
            variables.accessToken
          )}`,
        },
      }),
    }),
    sendOtp: builder.mutation<void, void>({
      query: (payload) => ({
        url: `auth/user/generate-otp`,
        method: "post",
        body: payload,
      }),
    }),
    verifyOtp: builder.mutation<void, void>({
      query: (payload) => ({
        url: `auth/user/verify-otp`,
        method: "post",
        body: payload,
        headers: {
          Authorization: `Bearer ${localStorage.getItem(variables.resetToken)}`,
        },
      }),
    }),
    changePassword: builder.mutation<any, any>({
      query: (payload) => ({
        url: `auth/user/change-password`,
        method: "post",
        body: payload,
        headers: {
          Authorization: `Bearer ${localStorage.getItem(variables.resetToken)}`,
        },
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useLoginMutation,
  useLogOutMutation,
  useSendOtpMutation,
  useVerifyOtpMutation,
  useChangePasswordMutation,
} = loginApi;
