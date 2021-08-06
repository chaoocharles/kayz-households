import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  shippingAddress: JSON.parse(localStorage.getItem("shippingAddress")),
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
  },
});

export const { saveShippingAddress } = checkoutSlice.actions;

export default checkoutSlice.reducer;
