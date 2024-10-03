// import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/404Page/ErrorPage";
import { Login } from "./pages/login/Login";
import Layout from "./components/layout/Layout";
import { Home } from "./pages/home/Home";
import { ForgotPassword } from "./pages/login/ForgotPassword";
import { ChangePassword } from "./pages/login/ChangePassword";
import { Profile } from "./pages/profile/Profile";
import { WithSidebar } from "./components/sidebar/WithSidebar";

const HomeWithSidebar = WithSidebar(Home);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomeWithSidebar/>, // Your Home component or content
      },
      {
        path: "/login",
        element: <Login />, // Login page component
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
