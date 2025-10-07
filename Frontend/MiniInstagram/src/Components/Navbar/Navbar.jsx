import React, { useState } from "react";
import "./Navbar.css";
import { IoHomeOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const [active, setActive] = useState('home')
  return (
    <nav className="navbar">
        <IoHomeOutline size="1.4em" className={`navbar-button ${active == 'home' ? 'active' : ""}`} onClick={()=>{setActive('home')}} />
      <IoSearchOutline size="1.4em" className={`navbar-button ${active == 'search' ? 'active' : ""}`} onClick={()=>{setActive('search')}} />
            <CgProfile size="1.4em" className={`navbar-button ${active == 'profile' ? 'active' : ""}`} onClick={()=>{setActive('profile')}} />
    </nav>
  );
};

export default Navbar;
