import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { FlexColumn, H2, P2 } from "../../styles/sharedStyles";
import { LoginContainer } from "./login.style";
import Button from "../../components/button/Button";
import { useLoginMutation } from "../../integration/redux/apis/loginApi";
import { variables } from "../../utilities/constants";
import { useNavigate } from "react-router-dom";
const validationSchema = Yup.object({
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
});
export const Login = () => {
    const navigate = useNavigate();
    const [login, { data, isLoading, error }] = useLoginMutation();
    const handleLogin = async (values) => {
        try {
            const token = await login(values);
            if (token?.data?.data?.accessToken) {
                localStorage.setItem(variables.accessToken, token?.data?.data?.accessToken);
                navigate('/');
            }
        }
        catch (err) {
            console.error({ err });
        }
    };
    return (_jsxs(LoginContainer, { children: [_jsxs(FlexColumn, { gap: "10px", children: [_jsx(H2, { children: "Login" }), _jsx(Formik, { initialValues: { email: "", password: "" }, validationSchema: validationSchema, onSubmit: (values, { setSubmitting }) => {
                            // Handle form submission
                            handleLogin(values);
                            setSubmitting(false);
                        }, children: ({ isSubmitting }) => (_jsxs(Form, { children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "email", children: "Email" }), _jsx(Field, { type: "email", name: "email" }), _jsx(ErrorMessage, { name: "email", component: "div" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "password", children: "Password" }), _jsx(Field, { type: "password", name: "password" }), _jsx(ErrorMessage, { name: "password", component: "div" })] }), _jsx(Button, { type: "submit", disabled: isSubmitting, text: "Login" })] })) })] }), _jsx(P2, { onClick: () => navigate("/forgot-password"), children: "Forgot password ?" })] }));
};
