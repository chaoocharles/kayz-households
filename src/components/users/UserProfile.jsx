import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Row, Col } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import MyTextInput from "../common/MyTextInput";

import { updateProfile } from "../../store/slices/authSlice";

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
          <p>
            <b>id:</b> <i>{auth._id}</i>
          </p>
          <Formik
            initialValues={{
              name: auth?.name,
              email: auth?.email,
              password: "",
              confirmPassword: "",
            }}
            validationSchema={Yup.object({
              name: Yup.string().max(20, "Must be 20 characters or less"),
              email: Yup.string().email("Invalid email address"),
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
                dispatch(updateProfile(values));
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
                placeholder="Enter Password"
              />

              <MyTextInput
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                placeholder="Cornfirm Password"
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
