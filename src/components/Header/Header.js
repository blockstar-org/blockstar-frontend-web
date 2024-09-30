import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
import { useLogOutMutation } from "../../integration/redux/apis/loginApi";
import { FlexRow, H2 } from "../../styles/sharedStyles";
import { variables } from "../../utilities/constants";
import Button from "../button/Button";
export const Header = () => {
    const navigate = useNavigate();
    const [logout] = useLogOutMutation();
    const isLoggedIn = localStorage.getItem(variables.accessToken) ? true : false;
    return (_jsxs(FlexRow, { padding: "10px", width: "100%", justifycontent: "space-between", style: { border: "1px solid white" }, children: [_jsx(H2, { children: "BlockStar" }), isLoggedIn ? (_jsx(Button, { text: "LogOut", onClick: () => {
                    logout();
                    navigate("/login");
                } })) : (_jsx(Button, { text: "Login", onClick: () => navigate("/login") }))] }));
};
