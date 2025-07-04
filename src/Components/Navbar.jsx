import React from "react";
import "./Navbar.css";

import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  // function handleclick() {
  //   navigate("/addquarter");
  // }
  return (
    <nav className="navbar">
      <div className="navbar-title">🌟 Goal Tracker</div>
      {/* <button className="logout-btn" onClick={handleclick}>
        + New Quarter
      </button> */}
    </nav>
  );
};

export default Navbar;
