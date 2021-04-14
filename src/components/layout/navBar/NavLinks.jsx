import React from "react";
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      <Link to="/login" onClick={() => window.scrollTo(0, 0)}>
        <span className="center-items-v">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-person-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg>
          <span>Login</span>
        </span>
      </Link>
      <Link to="/register" onClick={() => window.scrollTo(0, 0)}>
        <span className="center-items-v">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-right-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
          </svg>
          <span>Register</span>
        </span>
      </Link>
      <a href="#">
        <span className="center-items-v">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-file-earmark-spreadsheet-fill"
            viewBox="0 0 16 16"
          >
            <path d="M6 12v-2h3v2H6z" />
            <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM3 9h10v1h-3v2h3v1h-3v2H9v-2H6v2H5v-2H3v-1h2v-2H3V9z" />
          </svg>
          <span>Order History</span>
        </span>
      </a>
      <Link to="/addproduct">
        <span className="center-items-v">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-bag-plus-fill"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z"
            />
          </svg>
          <span>Add Product</span>
        </span>
      </Link>
    </>
  );
};

export default NavLinks;
