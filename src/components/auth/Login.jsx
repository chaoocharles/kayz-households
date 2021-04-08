import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MyTextInput from "../common/MyTextInput";

import "./Auth.css"

const Login = () => {
  return (
    <div className="auth-container">
      <h2>Login To Your Account</h2>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
            password: Yup.string()
            .required('Required')
            .matches(
              /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*.#?&])[A-Za-z\d@$!%*.#?&]{6,}$/,
              "Must Contain Atleast 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
            ),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <MyTextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane@gmail.com"
          />

          <MyTextInput
            label="Password"
            name="password"
            type="password"
            placeholder="6%8ej9"
          />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
