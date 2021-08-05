import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MyTextInput from "../common/MyTextInput";

import { Redirect } from "react-router-dom";
import { loginUser } from "../../store/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";

import "../common/forms.css";

const Login = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  if (auth._id) return <Redirect to="/cart" />;

  return (
    <div className="form-container">
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
          password: Yup.string().required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            dispatch(loginUser(values));
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
