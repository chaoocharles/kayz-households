import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";

import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./store/slices/productsSlice";
import { productsFetch } from "./store/slices/productsSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

store.dispatch(productsFetch())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
