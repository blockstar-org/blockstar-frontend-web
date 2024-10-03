import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useGetUserQuery } from "../../integration/redux/apis/userApi";
import { colors } from "../../styles/theme";
import { Header } from "../Header/Header";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

const Layout = () => {
  const navigate = useNavigate();
  const { data, error, isLoading } = useGetUserQuery();

  useEffect(() => {
    // Redirect if the user is unauthorized
    console.log({ error });

    if ((error as FetchBaseQueryError)?.status === 401) {
      localStorage.clear();
      navigate("/login");
    }
  }, [error, navigate]);

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        margin: "auto",
      }}
    >
      <main
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          background: `${colors.primary}`,
          maxWidth: "1440px",
        }}
      >
        {/* <Header /> */}
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
