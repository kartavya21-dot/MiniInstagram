import React from "react";
import logo from '../../assets/logo3.png'
import { CiCirclePlus } from "react-icons/ci";
import './Header.css'

const Header = () => {
  return (
    <div className="header-section">
      <img className="logo" src={logo} alt="logo" />
      <CiCirclePlus size="2em" className="new-post" />
    </div>
  );
};

export default Header;
