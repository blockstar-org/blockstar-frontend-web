// import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/404Page/ErrorPage";
import Layout from "./components/layout/Layout";
import { WithSidebar } from "./components/sidebar/WithSidebar";
import { Explore } from "./pages/explore/Explore";
import { Login } from "./pages/login/Login";
import { Profile } from "./pages/profile/Profile";

const HomeWithSidebar = WithSidebar(Explore);

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
