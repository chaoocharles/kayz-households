import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MyTextInput from "../common/MyTextInput";

const Register = () => {
  return (
    <div className="auth-container">
      <h2>Register For An Account</h2>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
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
            then: Yup.string().oneOf(
              [Yup.ref("password")],
              "Both password need to be the same"
            ),
          }),
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
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Jane"
          />

          <MyTextInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Doe"
          />

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
