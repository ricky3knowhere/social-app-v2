import React from "react";
import "./auth.css";
import Logo from "../../img/logo.png";

const Auth = () => {
  return (
    <div className="auth">
      <div className="aLeft">
        <img src={Logo} alt="logo" />
        <div className="webName">
          <h1>ZWX Media</h1>
          <h6>Explore the idea throughout the world</h6>
        </div>
      </div>
      {/* <SignUp /> */}
      <Login />
    </div>
  );
};

const Login = () => {
  return (
    <div className="aRight">
      <form className="infoForm authForm">
        <h3>Login</h3>
        <div>
          <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="Username"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="password"
            placeholder="Password"
          />
        </div>
        <div>
          <span style={{ fontSize: "12px" }}>
            Don't have an account Sign up
          </span>
          <button className="button infoButton" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

const SignUp = () => {
  return (
    <div className="aRight">
      <form className="infoForm authForm">
        <h3>Sign Up</h3>
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastname"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="username"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="password"
            placeholder="password"
          />
          <input
            type="text"
            className="infoInput"
            name="confirmPass"
            placeholder="Confirm password"
          />
        </div>
        <div>
          <span style={{ fontSize: "12px" }}>
            Already have an account. Login!
          </span>
        </div>
        <button className="button infoButton" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Auth;
