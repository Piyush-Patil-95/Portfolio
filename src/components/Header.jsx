import React from "react";
import "./../styles/Header.css";
import { HashLink } from "react-router-hash-link";
export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg nav ">
      <div className="logo poppins-semibold">
        PortFolio<span className="fullStop">.</span>
      </div>

      <div className=" collapse navbar-collapse">
        <div className="navbar-nav links">
          <HashLink className="nav-item nav-link link navTag" to="#home" smooth>
            Home
          </HashLink>
          <HashLink
            className="nav-item nav-link link navTag"
            to="#about"
            smooth
          >
            About
          </HashLink>
          <HashLink className="nav-item nav-link link navTag" to="#skills">
            Skills
          </HashLink>
          <HashLink className="nav-item nav-link link navTag" to="#projects">
            Projects
          </HashLink>
          <HashLink className="nav-item nav-link link navTag" to="#contact">
            Contact
          </HashLink>
        </div>
      </div>
    </nav>
  );
}
