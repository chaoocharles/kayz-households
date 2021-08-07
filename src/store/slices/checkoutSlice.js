import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  shippingAddress: JSON.parse(localStorage.getItem("shippingAddress")),
  payment: JSON.parse(localStorage.getItem("paymentMethod")),
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    saveShippingAddress(state, action) {
      localStorage.setItem("shippingAddress", JSON.stringify(action.payload));

      toast.info("Address saved...", {
        position: "bottom-right",
      });
      return { ...state, shippingAddress: action.payload };
    },
    savePaymentMethod(state, action) {
      localStorage.setItem("paymentMethod", JSON.stringify(action.payload));

      toast.info("Payment method saved...", {
        position: "bottom-right",
      });
      return { ...state, payment: action.payload };
    },
  },
});

export const { saveShippingAddress, savePaymentMethod } = checkoutSlice.actions;

export default checkoutSlice.reducer;
