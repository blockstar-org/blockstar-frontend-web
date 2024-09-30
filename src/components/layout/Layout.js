import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useGetUserQuery } from "../../integration/redux/apis/userApi";
import { colors } from "../../styles/theme";
import { Header } from "../Header/Header";
const Layout = () => {
    const navigate = useNavigate();
    const { data, error, isLoading } = useGetUserQuery();
    useEffect(() => {
        // Redirect if the user is unauthorized
        console.log({ error });
        if (error?.status === 401) {
            localStorage.clear();
            navigate("/login");
        }
    }, [error, navigate]);
    return (_jsx("div", { style: {
            display: "flex",
            width: "100%",
            justifyContent: "center",
            margin: "auto",
        }, children: _jsxs("main", { style: {
                display: "flex",
                width: "100%",
                flexDirection: "column",
                background: `${colors.primary}`,
                maxWidth: "1440px",
            }, children: [_jsx(Header, {}), _jsx(Outlet, {})] }) }));
};
export default Layout;
