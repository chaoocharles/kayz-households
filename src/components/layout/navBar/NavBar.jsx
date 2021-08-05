import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SideNav from "./SideNav/SideNav";
import NavLinks from "./NavLinks";

import "./NavBar.css";
import logo from "../../../assets/kayz-logo.png";

const NavBar = () => {
  const [sideNav, setSideNav] = useState({
    isOpen: false,
  });
  const { cartTotalQuantity } = useSelector((state) => state.products);
  return (
    <>
      <SideNav sideNav={sideNav} setSideNav={setSideNav} />
      <nav>
        <Link className="logo" to="/" onClick={() => window.scrollTo(0, 0)}>
          <img src={logo} alt="Kayz Households" />
        </Link>
        <div className="cart">
          <Link to="/cart" onClick={() => window.scrollTo(0, 0)}>
            <span className="center-items-v">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-cart-fill"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
              <span className="cart-quantity">
                <span>{cartTotalQuantity}</span>
              </span>
            </span>
          </Link>
        </div>
        <div className="nav-links">
          <NavLinks />
        </div>
        <div
          className="custom-toggle-button"
          onClick={() => setSideNav({ ...sideNav, isOpen: !sideNav.isOpen })}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
