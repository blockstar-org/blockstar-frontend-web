import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/counterslice";
import generateReducer from "./slice/generateslice";
import { loginApi } from "./apis/loginApi";
import { userApi } from "./apis/userApi";
import { utilsApi } from "./apis/utilsApi";
import { brandApi } from "./apis/brandApi";
import { generateApi } from "./apis/generateApi";
import { scriptApi } from "./apis/scriptApi";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    generate: generateReducer,
    [userApi.reducerPath]: userApi.reducer,
    [loginApi.reducerPath]: loginApi.reducer,
    [utilsApi.reducerPath]: utilsApi.reducer,
    [brandApi.reducerPath]: brandApi.reducer,
    [generateApi.reducerPath]: generateApi.reducer,
    [scriptApi.reducerPath]: scriptApi.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      userApi.middleware,
      loginApi.middleware,
      utilsApi.middleware,
      brandApi.middleware,
      generateApi.middleware,
      scriptApi.middleware
    ]),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
