import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MyTextInput from "../common/MyTextInput";

import { registerUser } from "../../store/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  if (auth._id) return <Redirect to="/cart" />;
  return (
    <div className="form-container">
      <h2>Register For An Account</h2>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string()
            .required("Required")
            .matches(
              /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*.#?&])[A-Za-z\d@$!%*.#?&]{6,}$/,
              "Must Contain Atleast 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
            ),
          confirmPassword: Yup.string().when("password", {
            is: (val) => (val && val.length > 0 ? true : false),
            then: Yup.string()
              .required("Required")
              .oneOf(
                [Yup.ref("password")],
                "Both password need to be the same"
              ),
          }),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            dispatch(registerUser(values));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <MyTextInput
            label="Name"
            name="name"
            type="text"
            placeholder="Jane Doe"
          />

          <MyTextInput
            label="Email"
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

          <MyTextInput
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            placeholder="6%8ej9"
          />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
