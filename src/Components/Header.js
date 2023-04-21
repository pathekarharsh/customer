import React from "react";
import "./Header.css";
import { FaSearch, FaMapMarkerAlt, FaBell, FaShoppingCart, FaWallet } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <form className="navbar-search">
          <input type="text" placeholder="Search" />
          <button type="submit"><FaSearch /></button>
        </form>
      </div>
      <div className="navbar-right">
      <div className="navbar-location"><FaMapMarkerAlt /> Nagpur, Maharashtra</div>
        <Link to= "/notification" className="navbar-icon"><FaBell /></Link>
        <Link to= "/cart" className="navbar-icon"><FaShoppingCart /></Link>
        <Link to= "/wallet" className="navbar-icon"><FaWallet /></Link>
      </div>
    </div>
  );
}

export default Navbar;
