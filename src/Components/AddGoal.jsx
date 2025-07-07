import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addquarter } from "../redux/StoreSlice.js";
import { useNavigate, useParams } from "react-router-dom";
import { addGoaltoQuater } from "../redux/StoreSlice.js";
import "./AddGoal.css";
import { nanoid } from "@reduxjs/toolkit";

const AddGoal = () => {
  const navigate = useNavigate();
  const { qid } = useParams();
  const dispatch = useDispatch();
  const [goal, setGoal] = useState({
    title: "",
    description: "",
    deadline: "",
    status: "In Progress",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGoal((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addGoaltoQuater({ qid, goal }));
    navigate(`/allgoals/${qid}`);
  };

  const quarter = useSelector((state) =>
    state.tracker.quarters.find((q) => q.qid === qid)
  );

  return (
    <div className="add-goal-container">
      <div className="goal-form-card">
        <h1 className="form-title">Add New Goal</h1>
        <p className="form-subtitle">For {quarter?.title || "this quarter"}</p>

        <form className="goal-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Goal Title</label>
            <input
              id="title"
              type="text"
              name="title"
              value={goal.title}
              onChange={handleChange}
              placeholder="e.g. Learn Redux"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={goal.description}
              onChange={handleChange}
              placeholder="Describe what you want to achieve..."
              rows="4"
              required
            ></textarea>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="deadline">Deadline</label>
              <input
                id="deadline"
                type="date"
                name="deadline"
                value={goal.deadline}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="status">Status</label>
              <select
                id="status"
                name="status"
                value={goal.status}
                onChange={handleChange}
                required
              >
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Save Goal
          </button>
        </form>
      </div>

      {quarter?.goals?.length > 0 && (
        <div className="existing-goals">
          <h2 className="existing-goals-title">Current Goals</h2>
          <div className="goals-grid">
            {quarter.goals.map((goal) => (
              <div className="goal-card" key={goal.id}>
                <h3>{goal.title}</h3>
                <p className="goal-description">{goal.description}</p>
                <div className="goal-meta">
                  <span
                    className={`status-badge ${goal.status
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`}
                  >
                    {goal.status}
                  </span>
                  <span className="deadline">
                    Due: {new Date(goal.deadline).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AddGoal;
