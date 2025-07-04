import React from "react";
import "./Home.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const quarters = useSelector((state) => state.tracker.quarters);

  return (
    <div className="home-container">
      <button
        className="add-quarter-btn"
        onClick={() => navigate("/addquarter")}
      >
        + Add Quarter
      </button>
      <h1 className="home-title">Your Quarters</h1>

      <div className="quarters-list">
        {quarters.map((ele) => (
          <div
            className="quarter-card"
            key={ele.qid}
            onClick={() => navigate(`/allgoals/${ele.qid}`)}
          >
            <h2>{ele.title}</h2>
            <p>Start Date: {ele.start}</p>
            <p>End Date: {ele.end}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
