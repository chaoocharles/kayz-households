import React from "react";

import "./Auth.css";

const Login = () => {
  return (
    <>
      <div className="login-container">
        <h2>My Account</h2>
        <form>
          <h3>Login</h3>
          <label htmlFor="email">
            Email address<sup>*</sup>
          </label>
          <input type="text" />
          <label htmlFor="email">
            Password<sup>*</sup>
          </label>
          <input type="text" />
          <div>
          <input type="radio"/>
          <span>Lost password?</span>
          </div>
          <input type="submit" value="Login"/>
        </form>
      </div>
    </>
  );
};

export default Login;
