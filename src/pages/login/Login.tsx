import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import * as Yup from "yup";
import {
  CustomError,
  FlexColumn,
  FlexRow,
  FormikForm,
  H2,
  ImageWrapper,
  P2,
  SVGWrapper,
} from "../../styles/sharedStyles";
import { LoginContainer } from "./login.style";
import Button from "../../components/button/Button";
import { useLoginMutation } from "../../integration/redux/apis/loginApi";
import { variables } from "../../utilities/constants";
import { useNavigate } from "react-router-dom";
import { images } from "../../assets/images";
import { colors } from "../../styles/theme";
import { InputComponent } from "../../components/InputComponent/InputComponent";
import { LogoIcon } from "../../assets/svgs/svg";
import { ForgotPassword } from "./ForgotPassword";
import { notify } from "../../main";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";
import Checkbox from "../../components/checkbox/Checkbox";

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
  const [forgotPass, setForgotPass] = useState<boolean>(false);
  const [login, { data, isLoading, error }] = useLoginMutation();
  const [value, setCheckbox] = useState<boolean>(false);

  const handleLogin = async (values) => {
    try {
      const token = await login(values).unwrap();
      console.log({ token });

      if (token?.data?.accessToken) {
        if(value){
          sessionStorage.setItem(variables.accessToken, token?.data?.accessToken)
        }else{
          localStorage.setItem(variables.accessToken, token?.data?.accessToken);
        }
        notify("Logged in successfully");
        navigate("/");
      }
    } catch (err) {
      console.log({err});
      
      notify(err?.data?.message, true);
      console.error({ err });
    }
  };

  return (
    <LoginContainer>
      {forgotPass ? (
        <ForgotPassword setForgotPass={setForgotPass} />
      ) : (
        <FlexColumn>
          <FlexColumn alignitems="flex-start" gap="64px">
            <SVGWrapper>
              <LogoIcon />
            </SVGWrapper>
            <FlexColumn gap="16px">
              <H2>Let's get creative!</H2>
              <P2 color={colors.gray}>
                Log in to start creating magical video.
              </P2>
            </FlexColumn>
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                // Handle form submission
                handleLogin(values);
                setSubmitting(false);
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <FlexColumn gap="64px" alignitems="flex-start">
                    <FlexColumn gap="24px" alignitems="flex-start">
                      <div>
                        <Field
                          type="email"
                          name="email"
                          component={InputComponent}
                          placeholder="Email"
                        />
                        <CustomError name="email" component="div" />
                      </div>

                      <div>
                        <Field
                          type="password"
                          name="password"
                          component={InputComponent}
                          placeholder="Password"
                        />
                        <CustomError name="password" component="div" />
                      </div>
                      <FlexRow width="100%" justifycontent="space-between">
                        <FlexRow gap="16px">
                          <Checkbox
                            value={value}
                            checked={value}
                            onChange={({ target }) => setCheckbox(!value)}
                          />
                          <P2>Remember me</P2>
                        </FlexRow>
                        <P2
                          color={colors.teal}
                          style={{ cursor: "pointer" }}
                          onClick={() => setForgotPass(true)}
                        >
                          Forgot Password?
                        </P2>
                      </FlexRow>
                    </FlexColumn>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      text="Log in"
                      style={{ width: "100%" }}
                      loading={isLoading}
                    />
                  </FlexColumn>
                </Form>
              )}
            </Formik>
          </FlexColumn>
        </FlexColumn>
      )}
      <FlexRow>
        <ImageWrapper src={images.loginImage} alt="login" />
      </FlexRow>
    </LoginContainer>
  );
};
