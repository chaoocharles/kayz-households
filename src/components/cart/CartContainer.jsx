import React from "react";
import "./Cart.css";

import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getTotals } from "../../store/slices/productsSlice";
import { clearCart } from "../../store/slices/productsSlice";

const CartContainer = () => {
  const { cartItems, cartTotalAmount, cartTotalQuantity } = useSelector(
    (state) => state.products
  );
  console.log(cartItems);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getTotals());
  }, [cartItems, dispatch]);

  return (
    <>
      <div className="cart-container">
        <h2>Cart - {cartTotalQuantity} Item(s)</h2>
        {cartItems.length === 0 ? (
          <div>
            <p>Your cart is currently empty!</p>
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-arrow-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                  />
                </svg>
              </span>
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items">
              {cartItems &&
                cartItems.map((cartItem) => (
                  <CartItem key={cartItem._id} cartItem={cartItem} />
                ))}
            </div>
            <div className="cart-totals">
              <h3>Sub-Total: KSH.{cartTotalAmount}</h3>
              <button className="toCheckout">
                <Link to="/cart/checkout" onClick={() => window.scrollTo(0, 0)}>
                  Proceed To Checkout
                </Link>
              </button>
              <button
                className="clear-cart"
                onClick={() => dispatch(clearCart())}
              >
                Clear Cart
              </button>
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                </span>
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartContainer;
