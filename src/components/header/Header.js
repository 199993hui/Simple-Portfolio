import React from "react";
import "./Header.css";
import Headroom from "react-headroom";
import {greeting} from "../../portfolio";
function Header() {
  return (
    <Headroom>
      <header className="header">
        <a href=" " className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li><a href="#skills">Skills</a></li>
          <li><a href="#blogs">Education</a></li>
          <li><a href="#experience">Work Experiences</a></li>
          <li><a href="#opensource">Projects</a></li>
          <li><a href="#certs">Certfications</a></li>
          <li><a href="#contact">Contact Me</a></li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
