import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from './bm.png';
const Header: React.FC = () => {
  return (
    <div className="page-header container">
      <div className="logo-wrapper">
        <img src={logo} alt="breketmax-logo" />
      </div>
      <NavLink to="/">Weather</NavLink>
      <NavLink to="gallery">Gallery</NavLink>
    </div>
  );
};

export default Header;
