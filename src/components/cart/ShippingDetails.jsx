import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MyTextInput from "../common/MyTextInput";
import MySelect from "../common/MySelect";

import { Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../../store/slices/checkoutSlice";
import CheckoutSteps from "./CheckoutSteps";

const ShippingDetails = () => {
  const auth = useSelector((state) => state.auth);
  const address = useSelector((state) => state.checkout.shippingAddress);
  const dispatch = useDispatch();
  const history = useHistory();

  if (!auth._id) return <Redirect to="/login" />;

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  return (
    <div className="form-container">
      <CheckoutSteps step1 />
      <h2>Shipping Details</h2>
      <Formik
        initialValues={{
          name: address?.name,
          phone: address?.phone,
          deliveryAddress: address?.deliveryAddress,
          region: address?.region,
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          phone: Yup.string()
            .required("Required")
            .matches(phoneRegExp, "Phone number is not valid"),
          deliveryAddress: Yup.string()
            .required("Required")
            .min(4, "Must be 4 characters or more"),
          region: Yup.string()
            .oneOf(["Nairobi", "Nakuru", "Nyeri", "Other"], "Invalid Region")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            dispatch(saveShippingAddress(values));
            history.push("/cart/payment-method");
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
            label="Phone Number"
            name="phone"
            type="number"
            placeholder="+254 700000000"
          />

          <MyTextInput
            label="Delivery Address"
            name="deliveryAddress"
            type="text"
            placeholder="Street Name / Building / Apartment No. / Floor"
          />
          <MySelect label="Region" name="region">
            <option value="">Select Region</option>
            <option value="Nairobi">Nairobi</option>
            <option value="Nakuru">Nakuru</option>
            <option value="Nyeri">Nyeri</option>
            <option value="Other">Other</option>
          </MySelect>
          <button type="submit">Next</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ShippingDetails;
