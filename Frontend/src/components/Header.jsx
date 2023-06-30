import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import "./Header.css";

function Header() {
  return (
    <nav>
      <Logo />
      <div className="nav-links navs">
        <Link to="/">Home</Link>
        <Link to="/Cart">Cart</Link>
        <Link to="/Shop">Shop</Link>
        <Link to="/Product">Product</Link>
      </div>
      <div className="nav-logins navs">
        <Link to="/Login">Login</Link>
        <Link to="/Signup">Sign Up</Link>
      </div>
    </nav>
  );
}

export default Header;
