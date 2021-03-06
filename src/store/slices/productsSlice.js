import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";
import { url } from "../../api";

const productsLocalStorage = localStorage.getItem("products")
  ? JSON.parse(localStorage.getItem("products"))
  : {};

const initialState = {
  productItems: productsLocalStorage.productItems
    ? productsLocalStorage.productItems
    : [],
  cartItems: productsLocalStorage.cartItems
    ? productsLocalStorage.cartItems
    : [],
  cartTotalQuantity: productsLocalStorage.cartTotalQuantity
    ? productsLocalStorage.cartTotalQuantity
    : 0,
  cartTotalAmount: productsLocalStorage.cartTotalAmount
    ? productsLocalStorage.cartTotalAmount
    : 0,
  status: null,
};

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    try {
      const response = await axios.get(`${url}/products`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart(state, action) {
      let tempProductItems = state.productItems.map((productItem) => {
        if (productItem._id === action.payload._id) {
          productItem = {
            ...productItem,
            cartQuantity: productItem.cartQuantity + 1,
          };

          const nextCartItems = [...state.cartItems];
          const existingIndex = nextCartItems.findIndex(
            (item) => item._id === action.payload._id
          );

          if (existingIndex >= 0) {
            nextCartItems[existingIndex] = {
              ...productItem,
            };
            toast.success("Increased product quantity", {
              position: "bottom-right",
            });
          } else {
            nextCartItems.push(productItem);
            toast.success("Product added to cart", {
              position: "bottom-right",
            });
          }

          state.cartItems = nextCartItems;
        }
        return productItem;
      });
      state.productItems = tempProductItems;
      localStorage.setItem("products", JSON.stringify(state));
    },
    decreaseCart(state, action) {
      let tempProductItems = state.productItems.map((productItem) => {
        if (productItem._id === action.payload._id) {
          if (productItem.cartQuantity > 1) {
            productItem = {
              ...productItem,
              cartQuantity: productItem.cartQuantity - 1,
            };

            const nextCartItems = [...state.cartItems];
            const existingIndex = nextCartItems.findIndex(
              (item) => item._id === action.payload._id
            );

            if (existingIndex >= 0) {
              nextCartItems[existingIndex] = {
                ...productItem,
              };
            }

            state.cartItems = nextCartItems;
            toast.error("Decreased product quantity", {
              position: "bottom-right",
            });
          } else if (productItem.cartQuantity === 1) {
            productItem = {
              ...productItem,
              cartQuantity: 0,
            };

            const nextCartItems = [...state.cartItems];

            state.cartItems = nextCartItems.filter(
              (cartItem) => cartItem._id !== action.payload._id
            );

            toast.error("Product removed from cart", {
              position: "bottom-right",
            });
          }
        }
        return productItem;
      });
      state.productItems = tempProductItems;
      localStorage.setItem("products", JSON.stringify(state));
    },
    removeFromCart(state, action) {
      let tempProductItems = state.productItems.map((productItem) => {
        if (productItem._id === action.payload._id) {
          productItem = {
            ...productItem,
            cartQuantity: 0,
          };

          const nextCartItems = [...state.cartItems];

          state.cartItems = nextCartItems.filter(
            (cartItem) => cartItem._id !== action.payload._id
          );
          toast.error("Product removed from cart", {
            position: "bottom-right",
          });
        }
        return productItem;
      });
      state.productItems = tempProductItems;
      localStorage.setItem("products", JSON.stringify(state));
    },
    getTotals(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      return { ...state, cartTotalQuantity: quantity, cartTotalAmount: total };
    },
    clearCart(state, action) {
      const productItemsTemp = state.productItems.map((product) => {
        return { ...product, cartQuantity: 0 };
      });
      state.productItems = productItemsTemp;
      state.cartItems = [];
      toast.error("Cart cleared", { position: "bottom-right" });
      localStorage.setItem("products", JSON.stringify(state));
    },
  },
  extraReducers: {
    [productsFetch.pending]: (state, action) => {
      state.status = "pending";
      // localStorage.setItem("products", JSON.stringify(state));
    },
    [productsFetch.fulfilled]: (state, action) => {
      state.productItems = action.payload;
      state.status = "success";
      // localStorage.setItem("products", JSON.stringify(state));
    },
    [productsFetch.rejected]: (state, action) => {
      state.status = "rejected";
      // localStorage.setItem("products", JSON.stringify(state));
    },
  },
});

export const { addToCart, decreaseCart, getTotals, removeFromCart, clearCart } =
  productsSlice.actions;

export default productsSlice.reducer;
