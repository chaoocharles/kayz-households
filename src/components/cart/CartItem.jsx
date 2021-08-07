import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addToCart,
  decreaseCart,
  removeFromCart,
} from "../../store/slices/productsSlice";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="cart-item">
        <Link
          onClick={() => window.scrollTo(0, 0)}
          to={`/product/${cartItem._id}`}
        >
          <img src={cartItem.image} alt="" />
        </Link>
        <Link
          onClick={() => window.scrollTo(0, 0)}
          to={`/product/${cartItem._id}`}
        >
          <p className="item-name">{cartItem.title}</p>
        </Link>
        <p className="item-price">
          <span>ksh.</span>
          {cartItem.price}
        </p>
        <div className="change-amount">
          <span
            className="decrease-icon"
            onClick={() => dispatch(decreaseCart(cartItem))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-arrow-left-square-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z" />
            </svg>
          </span>
          <span>{cartItem.cartQuantity}</span>
          <span
            className="increase-icon"
            onClick={() => dispatch(addToCart(cartItem))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-arrow-right-square-fill"
              viewBox="0 0 16 16"
            >
              <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z" />
            </svg>
          </span>
        </div>
        <span
          className="remove-icon"
          onClick={() => dispatch(removeFromCart(cartItem))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-x-square-fill"
            viewBox="0 0 16 16"
          >
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
          </svg>
        </span>
      </div>
    </>
  );
};

export default CartItem;
