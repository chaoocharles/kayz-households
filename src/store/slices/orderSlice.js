import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";
import { url, setHeaders } from "../../api";

const initialState = {
  order: null,
  status: null,
};

export const createOrder = createAsyncThunk(
  "order/createOrder",
  async (order) => {
    try {
      const createdOrder = await axios.post(
        `${url}/orders`,
        order,
        setHeaders()
      );
      return createdOrder.data;
    } catch (error) {
      console.log(error.response);

      toast.error(error.response?.data, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  }
);

export const getOrderDetails = createAsyncThunk(
  "order/getOrderDetails",
  async (id) => {
    try {
      const order = await axios.post(`${url}/orders/${id}`, setHeaders());
      return order.data;
    } catch (error) {
      console.log(error.response);

      toast.error(error.response?.data, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: {
    [createOrder.pending]: (state, action) => {
      return { ...state, status: "pending" };
    },
    [createOrder.fulfilled]: (state, action) => {
      if (action.payload) {
        toast.success("Order created...", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        return {
          ...state,
          order: action.payload,
          status: "success",
        };
      } else return state;
    },
    [createOrder.rejected]: (state, action) => {
      return { ...state, status: "rejected" };
    },
    [getOrderDetails.rejected]: (state, action) => {
      return { ...state, status: "rejected" };
    },
    [getOrderDetails.pending]: (state, action) => {
      return { ...state, status: "pending" };
    },
    [getOrderDetails.fulfilled]: (state, action) => {
      if (action.payload) {
        return {
          ...state,
          order: action.payload,
          status: "success",
        };
      } else return state;
    },
  },
});

export default orderSlice.reducer;
