import React from "react";
import "../Login.css";
import { Link } from "@material-ui/icons";

function Login() {
  return (
    <div className="Login">
      <Link to="/">
        <img
          className="Login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="logo"
        />
      </Link>
    </div>
  );
}

export default Login;
