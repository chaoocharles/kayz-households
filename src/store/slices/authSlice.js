import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import axios from "axios";
import { url, setHeaders } from "../../api";

const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null,
  _id: null,
  status: null,
};

export const loginUser = createAsyncThunk("auth/loginUser", async (values) => {
  try {
    const token = await axios.post(`${url}/auth/login`, {
      email: values.email,
      password: values.password,
    });
    localStorage.setItem("token", token.data);
    return token.data;
  } catch (error) {
    console.log(error.response);

    toast.error(error.response?.data, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
});

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (values) => {
    try {
      const token = await axios.post(`${url}/auth/register`, {
        name: values.name,
        email: values.email,
        password: values.password,
      });
      localStorage.setItem("token", token.data);
      return token.data;
    } catch (error) {
      console.log(error.response);

      toast.error(error.response?.data, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  }
);
export const updateProfile = createAsyncThunk(
  "auth/registerUser",
  async (values) => {
    try {
      const token = await axios.put(
        `${url}/auth/profile`,
        {
          name: values.name,
          email: values.email,
          password: values.password,
        },
        setHeaders()
      );
      localStorage.setItem("token", token.data);
      return token.data;
    } catch (error) {
      console.log(error.response);

      toast.error(error.response?.data, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadUser(state, action) {
      const token = state.token;

      if (token) {
        const user = jwtDecode(token);
        return {
          ...state,
          token,
          name: user.name,
          email: user.email,
          _id: user._id,
          status: "success",
        };
      } else return state;
    },
    logoutUser(state, action) {
      localStorage.removeItem("token");

      toast("Goodbye...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return {
        ...state,
        token: null,
        name: null,
        email: null,
        _id: null,
        status: null,
      };
    },
  },
  extraReducers: {
    [loginUser.pending]: (state, action) => {
      return { ...state, status: "pending" };
    },
    [loginUser.fulfilled]: (state, action) => {
      if (action.payload) {
        toast("Welcome...", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        const user = jwtDecode(action.payload);
        return {
          ...state,
          token: action.token,
          name: user.name,
          email: user.email,
          _id: user._id,
          status: "success",
        };
      } else return state;
    },
    [loginUser.rejected]: (state, action) => {
      return { ...state, status: "rejected" };
    },
    [registerUser.pending]: (state, action) => {
      return { ...state, status: "pending" };
    },
    [registerUser.fulfilled]: (state, action) => {
      if (action.payload) {
        toast("Welcome...", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        const user = jwtDecode(action.payload);
        return {
          ...state,
          token: action.token,
          name: user.name,
          email: user.email,
          _id: user._id,
          status: "success",
        };
      } else return state;
    },
    [registerUser.rejected]: (state, action) => {
      return { ...state, status: "rejected" };
    },
    [updateProfile.pending]: (state, action) => {
      return { ...state, status: "pending" };
    },
    [updateProfile.fulfilled]: (state, action) => {
      if (action.payload) {
        toast("Profile Updated...", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        const user = jwtDecode(action.payload);
        return {
          ...state,
          token: action.token,
          name: user.name,
          email: user.email,
          _id: user._id,
          status: "success",
        };
      } else return state;
    },
    [updateProfile.rejected]: (state, action) => {
      return { ...state, status: "rejected" };
    },
  },
});

export const { loadUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
