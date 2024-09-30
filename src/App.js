import { jsx as _jsx } from "react/jsx-runtime";
// import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/404Page/ErrorPage";
import { Login } from "./pages/login/Login";
import Layout from "./components/layout/Layout";
import { Home } from "./pages/home/Home";
import { ForgotPassword } from "./pages/login/ForgotPassword";
import { ChangePassword } from "./pages/login/ChangePassword";
const router = createBrowserRouter([
    {
        path: "/",
        element: _jsx(Layout, {}),
        errorElement: _jsx(ErrorPage, {}),
        children: [
            {
                path: "/",
                element: _jsx(Home, {}), // Your Home component or content
            },
            {
                path: "/login",
                element: _jsx(Login, {}), // Login page component
            },
            {
                path: "/forgot-password",
                element: _jsx(ForgotPassword, {}), // Forgot passord page component
            },
            {
                path: "/reset-password",
                element: _jsx(ChangePassword, {}), // Reset passord page component
            }
        ],
    },
]);
function App() {
    return _jsx(RouterProvider, { router: router });
}
export default App;
