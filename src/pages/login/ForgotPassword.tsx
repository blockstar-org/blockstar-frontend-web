import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { LogoIcon } from "../../assets/svgs/svg";
import Button from "../../components/button/Button";
import { InputComponent } from "../../components/InputComponent/InputComponent";
import {
  useChangePasswordMutation,
  useSendOtpMutation,
  useVerifyOtpMutation,
} from "../../integration/redux/apis/loginApi";
import { notify } from "../../main";
import {
  CustomError,
  FlexColumn,
  FlexRow,
  H2,
  P2,
  SVGWrapper,
} from "../../styles/sharedStyles";
import { colors } from "../../styles/theme";
import { variables } from "../../utilities/constants";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  otp: Yup.string().required("OTP is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export const ForgotPassword = ({ setForgotPass }) => {
  const navigate = useNavigate();
  const [sendOtp] = useSendOtpMutation();
  const [verifyOtp] = useVerifyOtpMutation();
  const [changePassword] = useChangePasswordMutation();

  const getOtp = async (values) => {
    try {
      const resp: any = await sendOtp(values).unwrap();
      console.log({resp});
      
      localStorage.setItem(variables.resetToken, resp?.data?.token);
      notify(resp.data?.message);
    } catch (err) {
      notify(err?.data?.message, true);
      console.error({ err });
    }
  };

  const verify = async (values) => {
    try {
      const resp: any = await verifyOtp({otp: values.otp});
      console.log({ resp });
      localStorage.setItem(variables.resetToken, resp?.data?.data?.token);
      handleResetPassword(values.password);
    } catch (err) {
      notify(err?.data?.message, true);
      console.error({ err });
    }
  };

  const handleResetPassword = async (password) => {
    try {
      const resp: any = await changePassword({ password: password });
      console.log({ resp });
      notify(resp.data?.message);
      setForgotPass(false)
    } catch (err) {
      notify(err?.data?.message, true);
      console.error({ err });
    }
  };

  return (
    <FlexColumn>
      <FlexColumn alignitems="flex-start" gap="64px">
        <FlexRow width="100%" justifycontent="space-between">
          <SVGWrapper>
            <LogoIcon />
          </SVGWrapper>
          <FlexRow gap="5px">
            <P2>Already a member? </P2>
            <P2
              style={{ color: colors.teal, cursor: "pointer" }}
              onClick={() => setForgotPass(false)}
            >
              Sign In
            </P2>
          </FlexRow>
        </FlexRow>

        <FlexColumn gap="16px">
          <H2>Update your Password</H2>
          <P2 color={colors.gray}>Dummy text will come here</P2>
        </FlexColumn>
        <Formik
          initialValues={{ email: "", otp: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            verify(values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, values }) => (
            <Form>
              <FlexColumn gap="64px" alignitems="flex-start">
                <FlexColumn gap="24px" alignitems="flex-start">
                  <div>
                    <Field
                      type="email"
                      name="email"
                      component={InputComponent}
                      otp
                      getOtp={() => getOtp(values)}
                      placeholder="Email"
                    />
                    <CustomError name="email" component="div" />
                  </div>

                  <div>
                    <Field
                      type="otp"
                      name="otp"
                      component={InputComponent}
                      placeholder="Add OTP"
                    />
                    <CustomError name="otp" component="div" />
                  </div>

                  <div>
                    <Field
                      type="password"
                      name="password"
                      component={InputComponent}
                      placeholder="Update Password"
                    />
                    <CustomError name="password" component="div" />
                  </div>
                </FlexColumn>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  text="Update"
                  style={{ width: "100%" }}
                />
              </FlexColumn>
            </Form>
          )}
        </Formik>
      </FlexColumn>
    </FlexColumn>
  );
};
