import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";
import { url, setHeaders } from "../../api";

const initialState = {
  order: null,
  getOrderStatus: null,
  createOrderStatus: null,
  payOrderStatus: null,
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
      const order = await axios.get(`${url}/orders/${id}`, setHeaders());
      return order.data;
    } catch (error) {
      console.log(error.response);

      toast.error(error.response?.data, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  }
);

export const payOrder = createAsyncThunk(
  "order/payOrder",
  async (orderId, paymentResult) => {
    try {
      const order = await axios.put(
        `${url}/orders/${orderId}/pay`,
        paymentResult,
        setHeaders()
      );
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
  reducers: {
    payOrderReset(state, action) {
      return {
        ...state,
        order: null,
        getOrderStatus: null,
        createOrderStatus: null,
        payOrderStatus: null,
      };
    },
  },
  extraReducers: {
    [createOrder.pending]: (state, action) => {
      return { ...state, createOrderStatus: "pending", getOrderStatus: null };
    },
    [createOrder.fulfilled]: (state, action) => {
      if (action.payload) {
        toast.success("Order created...", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        return {
          ...state,
          order: action.payload,
          createOrderStatus: "success",
          getOrderStatus: null,
        };
      } else return state;
    },
    [createOrder.rejected]: (state, action) => {
      return { ...state, createOrderStatus: "rejected", getOrderStatus: null };
    },
    [getOrderDetails.pending]: (state, action) => {
      return { ...state, getOrderStatus: "pending", createOrderStatus: null };
    },
    [getOrderDetails.fulfilled]: (state, action) => {
      if (action.payload) {
        return {
          ...state,
          order: action.payload,
          getOrderStatus: "success",
          createOrderStatus: null,
        };
      } else return state;
    },
    [getOrderDetails.rejected]: (state, action) => {
      return { ...state, getOrderStatus: "rejected", createOrderStatus: null };
    },
    [payOrder.pending]: (state, action) => {
      return { ...state, payOrderStatus: "pending" };
    },
    [payOrder.fulfilled]: (state, action) => {
      if (action.payload) {
        return {
          ...state,
          payOrderStatus: "success",
        };
      } else return state;
    },
    [payOrder.rejected]: (state, action) => {
      return { payOrderStatus: "rejected" };
    },
  },
});

export const { payOrderReset } = productsSlice.actions;

export default orderSlice.reducer;
