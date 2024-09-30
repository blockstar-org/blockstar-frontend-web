import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/counterslice";
import { loginApi } from "./apis/loginApi";
import { userApi } from "./apis/userApi";
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [userApi.reducerPath]: userApi.reducer,
        [loginApi.reducerPath]: loginApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([userApi.middleware, loginApi.middleware]),
});
