import React from 'react';
import logo from '../img/logo_allwhite.png';

const Navbar = () => {
  return (
    <nav className="blue lighten-1" >
      <div className="nav-wrapper">
        <img src={logo} alt="Smiley face" className="nav-logo"/>
      </div>
    </nav>
  );
};

export default Navbar;
