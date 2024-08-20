import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../css/header.css";

const Header = () => {
    const [icon, setIcon] = useState(false)
    const [border, setBorder] = useState("navlist_item")
    const handleClick = () =>{
        setIcon({clicked:!icon.clicked})
    }
  return (
    <div className="navbar_container">
      <nav id="navbar">
        <div className="logo_container">
          <img src="./Home_page/logo.png" alt="" className="logo" />
        </div>
        <div className="menu">
          <ul className={icon.clicked?"nav_list active":"nav_list"}>
            <NavLink to="/" className = 'nav_link'>
              <li className={border.clicked?"navlist_item activeLink" : "navlist_item"}>Home</li>
            </NavLink>
            <NavLink to="/about" className = 'nav_link'>
              <li className="navlist_item">About Us</li>
            </NavLink>
            <NavLink to="contact" className = 'nav_link'>
              <li className="navlist_item">Contact Us</li>
            </NavLink>
            <NavLink to="/services" className = 'nav_link'>
              <li className="navlist_item">Services</li>
            </NavLink>
            <NavLink to="/career" className = 'nav_link'>
              <li className="navlist_item">Career</li>
            </NavLink>
          </ul>
        </div>

        <div id="mobile" onClick={handleClick}>
          <i id="" className={icon.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </nav>

      <Outlet />
    </div>
  );
};

export default Header;
