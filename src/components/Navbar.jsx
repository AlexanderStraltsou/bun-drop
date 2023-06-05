import React from "react";
import { Link } from "react-router-dom";
import image from '../bundropimages/logo_color.png';

function Navbar() {
  return (
    <div className="nav-container">
      <Link to="/">
        <img src={image} alt="" className="logo-image"/>
      </Link>
      <div className="flex-container">
        <Link>
        <h4>Login | Register</h4>
        </Link>
        
      </div>
    </div>
  );
}

export default Navbar;