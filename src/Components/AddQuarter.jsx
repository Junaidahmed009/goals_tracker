import React from "react";
import "./AddQuarter.css";
import { useDispatch, useSelector } from "react-redux";
import { addquarter } from "../redux/StoreSlice.js";
import { useNavigate } from "react-router-dom";

const AddQuarter = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const quarters = useSelector((state) => state.tracker.quarters);
  // console.log(quarters);
  const [quarter, setQuarter] = React.useState({
    title: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    setQuarter({
      ...quarter,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addquarter(quarter));
    navigate("/");
    setQuarter({ title: "", startDate: "", endDate: "" });
  };

  return (
    <div className="add-quarter-container">
      <h1>Add New Quarter</h1>
      <form className="quarter-form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          value={quarter.title}
          onChange={handleChange}
          placeholder="e.g. Q1 2025"
          required
        />

        <label htmlFor="startdate">Start Date</label>
        <input
          id="startdate"
          type="date"
          name="startDate"
          value={quarter.startDate}
          onChange={handleChange}
          required
        />

        <label htmlFor="endDate">End Date</label>
        <input
          id="endDate"
          type="date"
          name="endDate"
          value={quarter.endDate}
          onChange={handleChange}
          required
        />

        <button type="submit" className="next-btn">
          Save Quarter
        </button>
      </form>
    </div>
  );
};

export default AddQuarter;
