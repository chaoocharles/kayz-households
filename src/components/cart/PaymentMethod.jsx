import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MySelect from "../common/MySelect";

import { Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../../store/slices/checkoutSlice";
import CheckoutSteps from "./CheckoutSteps";

const PaymentMethod = () => {
  const auth = useSelector((state) => state.auth);
  const address = useSelector((state) => state.checkout.shippingAddress);
  const payment = useSelector((state) => state.checkout.payment);
  const dispatch = useDispatch();
  const history = useHistory();

  if (!auth._id) return <Redirect to="/login" />;
  if (!address.deliveryAddress) return <Redirect to="/cart/shipping-details" />;

  return (
    <div className="form-container">
      <CheckoutSteps step1 step2 />
      <h2>Payment Method</h2>
      <Formik
        initialValues={{
          paymentMethod: payment?.paymentMethod,
        }}
        validationSchema={Yup.object({
          paymentMethod: Yup.string()
            .oneOf(["PayPal", "Card", "Mpesa"], "Invalid Method")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            dispatch(savePaymentMethod(values));
            history.push("/cart/place-order");
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <MySelect label="Payment Method" name="paymentMethod">
            <option value="">Select Method</option>
            <option value="PayPal">PayPal</option>
            <option value="Mpesa">Mpesa</option>
          </MySelect>
          <button type="submit">Next</button>
        </Form>
      </Formik>
    </div>
  );
};

export default PaymentMethod;
