import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div  className="menu" style={{zIndex:"100"}}>
      <nav>
            <ul>
              <li><NavLink to="/">Home </NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/contact">Contact Us</NavLink></li>
              <li><NavLink to="/customiser">Customiser</NavLink></li>
              <li><NavLink to="/model">3D Model</NavLink></li>
              <li><NavLink to="/login">Login/Register</NavLink></li>
              <li><NavLink to="/logout">Logout</NavLink></li>
            </ul>
            </nav>
            </div>
  );
}

export default Navbar