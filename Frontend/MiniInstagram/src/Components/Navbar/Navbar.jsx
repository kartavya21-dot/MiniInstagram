import React from 'react';
import './Navbar.css';
import { IoHomeOutline } from 'react-icons/io5';
import { IoSearchOutline } from 'react-icons/io5';
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <nav className='navbar'>
        <IoHomeOutline size="1.8em"/>
        <IoSearchOutline size="1.8em"/>
        <CgProfile size="1.8em"/>
    </nav>
  )
}

export default Navbar