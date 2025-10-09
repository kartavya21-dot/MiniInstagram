import React, { useState } from "react";
import "./Navbar.css";
import { IoHomeOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("home");
  return (
    <nav className="navbar">
      <Link to="/">
        <IoHomeOutline
          size="1.4em"
          className={`navbar-button ${active == "home" ? "active" : ""}`}
          onClick={() => {
            setActive("home");
          }}
        />
      </Link>
      <Link to="/search">
        <IoSearchOutline
          size="1.4em"
          className={`navbar-button ${active == "search" ? "active" : ""}`}
          onClick={() => {
            setActive("search");
          }}
        />
      </Link>
      <Link to="/profile">
        <CgProfile
          size="1.4em"
          className={`navbar-button ${active == "profile" ? "active" : ""}`}
          onClick={() => {
            setActive("profile");
          }}
        />
      </Link>
    </nav>
  );
};

export default Navbar;
