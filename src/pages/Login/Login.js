import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useHistory, useLocation } from "react-router-dom";
import "./Login.css";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const {
    user,
    handleLogin,
    error,
    handleEmailChange,
    handlePasswordChange,
    signInUsingGoogle,
  } = useAuth();

  return (
    <div id="login">
      <div id="login-container">
        <h2>Sign In</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            name=""
            onBlur={handleEmailChange}
            id="email"
            placeholder="Email address"
            required
          />
          <br />
          <input
            type="password"
            name=""
            onBlur={handlePasswordChange}
            id="password"
            placeholder="Password"
            required
          />
          <br />
          <div>
            <p>{error}</p>
          </div>
          <input type="submit" id="submit" value="SIGN IN" />
        </form>
        <button id="googleSignIn" onClick={signInUsingGoogle}>
          <FaGoogle className="google-icon" /> SIGN IN WITH GOOGLE
        </button>
        <div id="register">
          Don't have an account?
          <Link className="regiLink" to="/register">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
