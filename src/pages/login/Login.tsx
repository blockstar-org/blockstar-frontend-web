import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import * as Yup from "yup";
import { FlexColumn, FormikForm, H2, P2 } from "../../styles/sharedStyles";
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
      if (token?.data?.data?.accessToken){
        localStorage.setItem(
          variables.accessToken,
          token?.data?.data?.accessToken
        );
        navigate('/')
      }
       
    } catch (err) {
      console.error({ err });
    }
  };

  return (
    <LoginContainer>
      <FlexColumn gap="10px">
        <H2>Login</H2>
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
              <div>
                <label htmlFor="email">Email</label>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" />
              </div>

              <div>
                <label htmlFor="password">Password</label>
                <Field type="password" name="password" />
                <ErrorMessage name="password" component="div" />
              </div>

              <Button type="submit" disabled={isSubmitting} text="Login" />
            </Form>
          )}
        </Formik>
      </FlexColumn>
      <P2 onClick={() => navigate("/forgot-password")}>Forgot password ?</P2>
    </LoginContainer>
  );
};
