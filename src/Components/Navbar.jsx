import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  function handleclick() {
    navigate("/");
  }

  return (
    <nav className="navbar">
      <div className="navbar-title" onClick={handleclick}>
        <span className="navbar-icon">🌟</span>
        <span className="navbar-text">GoalTracker</span>
      </div>
      {/* Uncomment if you want to use this button later */}
      {/* <button className="new-quarter-btn" onClick={handleclick}>
        + New Quarter
      </button> */}
    </nav>
  );
};

export default Navbar;
