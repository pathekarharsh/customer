import React from "react";
import "./Header.css";
import { FaSearch, FaMapMarkerAlt, FaBell, FaShoppingCart, FaWallet } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar__left">
        <form className="navbar__search">
          <input type="text" placeholder="Search" />
          <button type="submit"><FaSearch /></button>
        </form>
      </div>
      <div className="navbar__right">
      <div className="navbar__location"><FaMapMarkerAlt /> Nagpur, Maharashtra</div>
        <Link to= "/notification" className="navbar__icon"><FaBell /></Link>
        <Link to= "/cart" className="navbar__icon"><FaShoppingCart /></Link>
        <Link to= "/wallet" className="navbar__icon"><FaWallet /></Link>
      </div>
    </div>
  );
}

export default Navbar;
