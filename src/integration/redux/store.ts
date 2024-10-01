import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/counterslice";
import { loginApi } from "./apis/loginApi";
import { userApi } from "./apis/userApi";
import { utilsApi } from "./apis/utilsApi";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [userApi.reducerPath]: userApi.reducer,
    [loginApi.reducerPath]: loginApi.reducer,
    [utilsApi.reducerPath]: utilsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      userApi.middleware,
      loginApi.middleware,
      utilsApi.middleware,
    ]),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
