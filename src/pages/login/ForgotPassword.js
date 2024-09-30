import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Button from "../../components/button/Button";
import { useSendOtpMutation, useVerifyOtpMutation, } from "../../integration/redux/apis/loginApi";
import { FlexColumn, H2 } from "../../styles/sharedStyles";
import { variables } from "../../utilities/constants";
const validationSchema = Yup.object({
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
});
const validationSchemaOTP = Yup.object({
    otp: Yup.string().required("OTP is required"),
});
export const ForgotPassword = () => {
    const navigate = useNavigate();
    const [isOtp, setIsOtp] = useState(false);
    const [sendOtp] = useSendOtpMutation();
    const [verifyOtp] = useVerifyOtpMutation();
    const getOtp = async (values) => {
        try {
            const resp = await sendOtp(values);
            console.log({ resp });
            localStorage.setItem(variables.resetToken, resp?.data?.data?.token);
            setIsOtp(true);
        }
        catch (err) {
            console.error({ err });
        }
    };
    const verify = async (values) => {
        try {
            const resp = await verifyOtp(values);
            console.log({ resp });
            localStorage.setItem(variables.resetToken, resp?.data?.data?.token);
            navigate('/reset-password');
        }
        catch (err) {
            console.error({ err });
        }
    };
    return (_jsxs(FlexColumn, { gap: "10px", children: [_jsx(H2, { children: isOtp ? "Enter OTP" : "Forgot password" }), isOtp ? (_jsx(Formik, { initialValues: { otp: "" }, validationSchema: validationSchemaOTP, onSubmit: (values, { setSubmitting }) => {
                    // Handle form submission
                    verify(values);
                    setSubmitting(false);
                }, children: ({ isSubmitting }) => (_jsxs(Form, { children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "otp", children: "Enter OTP" }), _jsx(Field, { type: "otp", name: "otp" }), _jsx(ErrorMessage, { name: "otp", component: "div" })] }), _jsx(Button, { type: "submit", disabled: isSubmitting, text: "Verify" })] })) })) : (_jsx(Formik, { initialValues: { email: "" }, validationSchema: validationSchema, onSubmit: (values, { setSubmitting }) => {
                    // Handle form submission
                    getOtp(values);
                    setSubmitting(false);
                }, children: ({ isSubmitting }) => (_jsxs(Form, { children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "email", children: "Enter Email" }), _jsx(Field, { type: "email", name: "email" }), _jsx(ErrorMessage, { name: "email", component: "div" })] }), _jsx(Button, { type: "submit", disabled: isSubmitting, text: "Get OTP" })] })) }))] }));
};
