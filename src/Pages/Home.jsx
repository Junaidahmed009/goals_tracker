import React from "react";
import "./Home.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const quarters = useSelector((state) => state.tracker.quarters);

  return (
    <div className="home-container">
      {quarters.length > 0 && (
        <button
          className="add-quarter-btn"
          onClick={() => navigate("/addquarter")}
        >
          <span className="btn-icon">+</span>
          <span className="btn-text">Add Quarter</span>
        </button>
      )}

      <div className="content-wrapper">
        {quarters.length > 0 ? (
          <>
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
                  <p>Goals: {ele.goals.length}</p>
                  <p>
                    Completed:{" "}
                    {/* {ele.goals.filter((g) => g.status === "Completed").length} */}
                  </p>
                  <div className="progress-bar-wrapper">
                    <div className="progress-bar-container">
                      <div
                        className="progress-bar-fill"
                        style={{
                          width: `${
                            ele.goals.length > 0
                              ? (ele.goals.filter(
                                  (g) => g.status === "Completed"
                                ).length /
                                  ele.goals.length) *
                                100
                              : 0
                          }%`,
                        }}
                      ></div>
                    </div>
                    <div className="progress-percentage">
                      {ele.goals.length > 0
                        ? Math.round(
                            (ele.goals.filter((g) => g.status === "Completed")
                              .length /
                              ele.goals.length) *
                              100
                          )
                        : 0}
                      %
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="welcome-message">
            <h1>Welcome to GoalTracker</h1>
            <p>Get started by adding your first quarter</p>
            <button
              className="cta-button"
              onClick={() => navigate("/addquarter")}
            >
              Create Your First Quarter
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
