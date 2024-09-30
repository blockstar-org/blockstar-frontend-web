import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Button from "../../components/button/Button";
import {
  useSendOtpMutation,
  useVerifyOtpMutation,
} from "../../integration/redux/apis/loginApi";
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
  const navigate = useNavigate()
  const [isOtp, setIsOtp] = useState<boolean>(false);
  const [sendOtp] = useSendOtpMutation();
  const [verifyOtp] = useVerifyOtpMutation();

  const getOtp = async (values) => {
    try {
      const resp: any = await sendOtp(values);
      console.log({ resp });
      localStorage.setItem(variables.resetToken, resp?.data?.data?.token)
      setIsOtp(true);
    } catch (err) {
      console.error({ err });
    }
  };

  const verify = async (values) => {
    try {
      const resp: any = await verifyOtp(values);
      console.log({ resp });
      localStorage.setItem(variables.resetToken, resp?.data?.data?.token)
      navigate('/reset-password')
    } catch (err) {
      console.error({ err });
    }
  };
  return (
    <FlexColumn gap="10px">
      <H2>{isOtp ? "Enter OTP" : "Forgot password"}</H2>
      {isOtp ? (
        <Formik
          initialValues={{ otp: "" }}
          validationSchema={validationSchemaOTP}
          onSubmit={(values, { setSubmitting }) => {
            // Handle form submission
            verify(values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div>
                <label htmlFor="otp">Enter OTP</label>
                <Field type="otp" name="otp" />
                <ErrorMessage name="otp" component="div" />
              </div>

              <Button type="submit" disabled={isSubmitting} text="Verify" />
            </Form>
          )}
        </Formik>
      ) : (
        <Formik
          initialValues={{ email: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            // Handle form submission
            getOtp(values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div>
                <label htmlFor="email">Enter Email</label>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" />
              </div>

              <Button type="submit" disabled={isSubmitting} text="Get OTP" />
            </Form>
          )}
        </Formik>
      )}
    </FlexColumn>
  );
};
