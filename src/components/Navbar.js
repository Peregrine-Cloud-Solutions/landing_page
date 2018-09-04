import React from 'react';
import logo from '../img/logo_allwhite.png';

const Navbar = () => {
  return (
    <nav className="blue lighten-1">
      <div className="nav-wrapper">
        {/* <a className="brand-logo left"></a> */}
        <img src={logo} alt="Smiley face" className="nav-logo"/>
        <a href="#" data-activates="mobile-demo" className="button-collapse right">
          <i className="material-icons">menu</i>
        </a>
        <ul id="mobile-demo" className="right hide-on-med-and-down">
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#our-team">Our Team</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
