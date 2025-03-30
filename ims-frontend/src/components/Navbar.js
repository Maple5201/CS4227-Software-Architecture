import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Login</Link></li>
        <li><Link to="/documents">Documents</Link></li>
        <li><Link to="/approval">Approval</Link></li>
        <li><Link to="/collaboration">Collaboration</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
