import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import AddQuarter from "./Components/AddQuarter";
import AllGoals from "./Pages/AllGoals.jsx";
import AddGoal from "./Components/AddGoal.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addquarter" element={<AddQuarter />} />
          <Route path="/allgoals/:qid" element={<AllGoals />} />
          <Route path="/addgoal/:qid" element={<AddGoal />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
