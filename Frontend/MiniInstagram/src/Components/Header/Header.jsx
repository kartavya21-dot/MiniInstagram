import React from "react";
import logo from "../../assets/logo3.png";
import { CiCirclePlus } from "react-icons/ci";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-section">
      <img className="logo" src={logo} alt="logo" />
      <Link to="/newPost">
        <CiCirclePlus size="2em" className="new-post" />
      </Link>
    </div>
  );
};

export default Header;
