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
  // console.log(qid);
  const dispatch = useDispatch();
  const [goal, setGoal] = useState({
    // id: nanoid(),
    title: "",
    description: "",
    deadline: "",
    status: "In Progress", // default value
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
    // navigate(`/allgoals/${qid}`);
    // setQuarter({ title: "", startDate: "", endDate: "" });
  };
  const quarterrr = useSelector((state) =>
    state.tracker.quarters.find((q) => q.qid === qid)
  );
  // function handleclick() {}
  return (
    <div className="add-quarter-container">
      <h1>Add Goal</h1>
      <form className="quarter-form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          value={goal.title}
          onChange={handleChange}
          placeholder="e.g. Learn Redux"
          required
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={goal.description}
          onChange={handleChange}
          placeholder="Brief description of your goal"
          required
        ></textarea>

        <label htmlFor="deadline">Deadline</label>
        <input
          id="deadline"
          type="date"
          name="deadline"
          value={goal.deadline}
          onChange={handleChange}
          required
        />

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

        <button type="submit" className="next-btn">
          Save Goal
        </button>
      </form>
      {quarterrr?.goals?.map((goal) => (
        <div key={goal.id}>
          <h3>{goal.title}</h3>
          <p>{goal.description}</p>
          <p>{goal.deadline}</p>
          <p>{goal.status}</p>
        </div>
      ))}
    </div>
  );
};

export default AddGoal;
