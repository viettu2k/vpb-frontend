import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Nav>
        <NavLink to="/">
          <img src="" alt="" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/services" activeStyle>
            Services
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact Us
          </NavLink>
          <NavLink to="/sign-up" activeStyle>
            Sign Up
          </NavLink>
          <NavBtn>
            <NavBtnLink to="/signin" />
          </NavBtn>
        </NavMenu>
      </Nav>
    </div>
  );
};

export default Navbar;
