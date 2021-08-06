import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button, Row, Col } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import MyTextInput from "../common/MyTextInput";

import "./UserProfile.css";

const UserProfile = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  if (!auth._id) return <Redirect to="/login" />;

  return (
    <div className="profile-container">
      <Row>
        <Col md={3}>
          <h2>Your Profile</h2>
          <p>id: {auth._id}</p>
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
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
                dispatch();
                setSubmitting(false);
              }, 400);
            }}
          >
            <Form>
              <MyTextInput
                label="Name"
                name="name"
                type="text"
                placeholder={auth.name}
              />

              <MyTextInput
                label="Email"
                name="email"
                type="email"
                placeholder={auth.email}
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

              <button type="submit">Update</button>
            </Form>
          </Formik>
        </Col>
        <Col md={9}>
          <h2>My Orders</h2>
        </Col>
      </Row>
    </div>
  );
};

export default UserProfile;
