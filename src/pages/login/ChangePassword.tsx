import { ErrorMessage, Field, Form, Formik } from "formik";
import { FlexColumn, H2 } from "../../styles/sharedStyles";
import * as Yup from "yup";
import { useState } from "react";
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
      if (!resp?.error) navigate("/login");
    } catch (err) {
      console.error({ err });
    }
  };

  return (
    <FlexColumn gap="10px">
      <H2>Change password</H2>
      <Formik
        initialValues={{ password: "", confirmPassword: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          // Handle form submission
          handleResetPassword(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
            </div>

            <div>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field type="confirmPassword" name="confirmPassword" />
              <ErrorMessage name="confirmPassword" component="div" />
            </div>

            <Button type="submit" disabled={isSubmitting} text="Reset" />
          </Form>
        )}
      </Formik>
    </FlexColumn>
  );
};
