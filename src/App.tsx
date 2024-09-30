// import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/404Page/ErrorPage";
import { Login } from "./pages/login/Login";
import Layout from "./components/layout/Layout";
import { Home } from "./pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home/>, // Your Home component or content
      },
      {
        path: "/login",
        element: <Login />, // Login page component
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
