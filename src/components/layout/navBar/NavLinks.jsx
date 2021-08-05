import React from "react";
import { Link, useHistory } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../../store/slices/authSlice";

const NavLinks = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logoutUser());
    history.push("/");
  };
  return (
    <>
      <Link to="/orders" onClick={() => window.scrollTo(0, 0)}>
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
          <span>Orders</span>
        </span>
      </Link>
      <Link to="/admin-dashboard" onClick={() => window.scrollTo(0, 0)}>
        <span className="center-items-v">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-file-person-fill"
            viewBox="0 0 16 16"
          >
            <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-1 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm-3 4c2.623 0 4.146.826 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.245C3.854 11.825 5.377 11 8 11z" />
          </svg>
          <span>Admin</span>
        </span>
      </Link>
      {auth._id ? (
        <NavDropdown title={auth.name} id="username">
          <Link to="/profile">
            <NavDropdown.Item>Profile</NavDropdown.Item>
          </Link>
          <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
        </NavDropdown>
      ) : (
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
        </>
      )}
    </>
  );
};

export default NavLinks;
