import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { FlexColumn, H2 } from "../../styles/sharedStyles";
import * as Yup from "yup";
import Button from "../../components/button/Button";
import { useChangePasswordMutation } from "../../integration/redux/apis/loginApi";
import { useNavigate } from "react-router-dom";
const validationSchema = Yup.object({
    password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm password is required"),
});
export const ChangePassword = () => {
    const navigate = useNavigate();
    const [changePassword] = useChangePasswordMutation();
    const handleResetPassword = async (values) => {
        try {
            const resp = await changePassword({ password: values.confirmPassword });
            console.log({ resp });
            if (!resp?.error)
                navigate("/login");
        }
        catch (err) {
            console.error({ err });
        }
    };
    return (_jsxs(FlexColumn, { gap: "10px", children: [_jsx(H2, { children: "Change password" }), _jsx(Formik, { initialValues: { password: "", confirmPassword: "" }, validationSchema: validationSchema, onSubmit: (values, { setSubmitting }) => {
                    // Handle form submission
                    handleResetPassword(values);
                    setSubmitting(false);
                }, children: ({ isSubmitting }) => (_jsxs(Form, { children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "password", children: "Password" }), _jsx(Field, { type: "password", name: "password" }), _jsx(ErrorMessage, { name: "password", component: "div" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "confirmPassword", children: "Confirm Password" }), _jsx(Field, { type: "confirmPassword", name: "confirmPassword" }), _jsx(ErrorMessage, { name: "confirmPassword", component: "div" })] }), _jsx(Button, { type: "submit", disabled: isSubmitting, text: "Reset" })] })) })] }));
};
