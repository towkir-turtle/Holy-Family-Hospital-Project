import React from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Register.css";

const Register = () => {
  const {
    signInUsingGoogle,
    handleEmailChange,
    handlePasswordChange,
    error,
    handleRegistration,
  } = useAuth();
  return (
    <div id="register">
      <div id="register-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleRegistration}>
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
          <input type="submit" id="submit" value="SIGN UP" />
        </form>
        <button id="googleSignIn" onClick={signInUsingGoogle}>
          <FaGoogle className="google-icon" /> SIGN IN WITH GOOGLE
        </button>
        <div id="login">
          Already have an account?
          <Link className="loginLink" to="/login">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
