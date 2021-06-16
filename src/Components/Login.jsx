import React, { useState } from "react";
import "../Login.css";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="Login">
      <Link to="/">
        <img
          className="Login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-In</h1>
        <form action="">
          <h5>Email</h5>
          <input
            type="email"
            name="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            name="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="Login__signInButton"
            type="submit"
            onClick={signIn}
          >
            Sing In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button className="Login__registerButton" onClick={register}>
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
