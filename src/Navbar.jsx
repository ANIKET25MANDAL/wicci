import React from "react";
import "./Navbar.css";
import logo from "./assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
   return (
      <>
      <div className="navbar-topbar"></div>
      <nav className="navbar">
         <div className="navbar-logo">
            <Link to="/">
               <img src={logo} alt="WICCI Logo" />
            </Link>
         </div>
         <div className="nav-link">
               <Link to="/">Home</Link>
               <Link to="/about-us">About Us</Link>
               <Link to="/lead-a-council">Lead a Council</Link>
               <Link to="/office-bearers">Office Bearers</Link>
               <Link to="/brochure">Brochure</Link>
               <Link to="/press">Press</Link>
               <Link to="/conferences">Conferences</Link>
               <Link to="/awards">Awards</Link>
               <Link to="/recommendations">Recommendations</Link>
         </div>
         <input type="text"  placeholder="Search"/>
      </nav>
      </>
   );
}

export default Navbar;
