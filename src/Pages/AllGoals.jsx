// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate, useParams } from "react-router-dom";
// import {
//   addObstracleToGoal,
//   addTacticsToGoal,
//   updateGoalById,
// } from "../redux/StoreSlice";
// import "./AllGoals.css";

// const AllGoals = () => {
//   const { qid } = useParams();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const [showObstacleModal, setShowObstacleModal] = useState(false);
//   const [showTacticModal, setShowTacticModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [selectedGoalId, setSelectedGoalId] = useState(null);

//   //======================
//   const [showEditObstacleModal, setShowEditObstacleModal] = useState(false);
//   const [showEditTacticModal, setShowEditTacticModal] = useState(false);
//   const [selectedObstacle, setSelectedObstacle] = useState(null); // { gid, oid, description, isovercome }
//   const [selectedTactic, setSelectedTactic] = useState(null); // { gid, tid, description }

//   const openEditObstacleModal = (gid, obs) => {
//     setSelectedGoalId(gid);
//     setSelectedObstacle({ ...obs });
//     setShowEditObstacleModal(true);
//   };

//   const openEditTacticModal = (gid, tac) => {
//     setSelectedGoalId(gid);
//     setSelectedTactic({ ...tac });
//     setShowEditTacticModal(true);
//   };

//   const handleObstacleUpdate = () => {
//     dispatch(
//       updateObstacleById({
//         gid: selectedGoalId,
//         oid: selectedObstacle.id,
//         updatedObstacle: {
//           description: selectedObstacle.description,
//           isovercome: selectedObstacle.isovercome,
//         },
//       })
//     );
//     setShowEditObstacleModal(false);
//   };

//   const handleTacticUpdate = () => {
//     dispatch(
//       updateTacticById({
//         gid: selectedGoalId,
//         tid: selectedTactic.id,
//         updatedTactic: {
//           description: selectedTactic.description,
//         },
//       })
//     );
//     setShowEditTacticModal(false);
//   };

//   //=======================

//   const [obstacleInput, setObstacleInput] = useState({
//     description: "",
//     isovercome: false,
//   });
//   const [tacticInput, setTacticInput] = useState("");
//   const [editGoalInput, setEditGoalInput] = useState({
//     title: "",
//     description: "",
//     deadline: "",
//     status: "",
//     obstacles: [],
//     tactics: [],
//   });

//   const quarter = useSelector((state) =>
//     state.tracker.quarters.find((q) => q.qid.toString() === qid)
//   );

//   if (!quarter) return <div className="center-text">Quarter not found</div>;

//   const handleAddGoalClick = () => navigate(`/addgoal/${qid}`);

//   const openObstacleModal = (goalId) => {
//     setSelectedGoalId(goalId);
//     setShowObstacleModal(true);
//   };

//   const openTacticModal = (goalId) => {
//     setSelectedGoalId(goalId);
//     setShowTacticModal(true);
//   };

//   const openEditModal = (goal) => {
//     setSelectedGoalId(goal.id);
//     setEditGoalInput({
//       title: goal.title,
//       description: goal.description,
//       deadline: goal.deadline,
//       status: goal.status,
//       obstacles: goal.obstacles || [],
//       tactics: goal.tactics || [],
//     });
//     setShowEditModal(true);
//   };

//   const handleObstacleSubmit = () => {
//     dispatch(
//       addObstracleToGoal({ gid: selectedGoalId, obstracle: obstacleInput })
//     );
//     setObstacleInput({ description: "", isovercome: false });
//     setShowObstacleModal(false);
//   };

//   const handleTacticSubmit = () => {
//     dispatch(
//       addTacticsToGoal({
//         gid: selectedGoalId,
//         tactic: { description: tacticInput },
//       })
//     );
//     setTacticInput("");
//     setShowTacticModal(false);
//   };

//   const handleGoalUpdate = () => {
//     const updatedGoal = {
//       ...editGoalInput,
//       obstacles: [...editGoalInput.obstacles],
//       tactics: [...editGoalInput.tactics],
//     };

//     dispatch(updateGoalById({ gid: selectedGoalId, updatedGoal }));
//     setShowEditModal(false);
//   };

//   return (
//     <div className="allgoals-container">
//       <h1 className="quarter-title">Goals for: {quarter.title}</h1>
//       <button className="add-goal-btn" onClick={handleAddGoalClick}>
//         + Add Goal
//       </button>

//       {quarter.goals.length === 0 ? (
//         <div className="center-text">No goals found for this quarter.</div>
//       ) : (
//         <ul className="goals-list">
//           {quarter.goals.map((goal) => (
//             <li key={goal.id} className="goal-card">
//               <h3>{goal.title}</h3>
//               <p>
//                 <strong>Description:</strong> {goal.description}
//               </p>
//               <p>
//                 <strong>Deadline:</strong> {goal.deadline}
//               </p>
//               <p>
//                 <strong>Status:</strong> {goal.status}
//               </p>

//               <div>
//                 <strong>Obstacles:</strong>
//                 {goal.obstacles?.length > 0 ? (
//                   goal.obstacles.map((o, i) => (
//                     <div key={i}>
//                       {o.description} ({o.isovercome ? "Overcome" : "Pending"})
//                     </div>
//                   ))
//                 ) : (
//                   <div>None</div>
//                 )}
//               </div>

//               <div>
//                 <strong>Tactics:</strong>
//                 {goal.tactics?.length > 0 ? (
//                   goal.tactics.map((t, i) => (
//                     <div key={i}> {t.description}</div>
//                   ))
//                 ) : (
//                   <div>None</div>
//                 )}
//               </div>

//               <button
//                 className="add-goal"
//                 onClick={() => openObstacleModal(goal.id)}
//               >
//                 + Add Obstacle
//               </button>
//               <button
//                 className="add-goal"
//                 onClick={() => openTacticModal(goal.id)}
//               >
//                 + Add Tactic
//               </button>
//               <button className="add-goal" onClick={() => openEditModal(goal)}>
//                 ✏️ Edit Goal
//               </button>
//               {goal.obstacles.map((obs) => (
//                 <div key={obs.id} className="inline-edit-box">
//                   <span>{obs.description}</span>
//                   <button
//                     className="small-edit-btn"
//                     onClick={() => openEditObstacleModal(goal.id, obs)}
//                   >
//                     ✏️ Edit Obstacle
//                   </button>
//                 </div>
//               ))}

//               {goal.tactics.map((tac) => (
//                 <div key={tac.id} className="inline-edit-box">
//                   <span>{tac.description}</span>
//                   <button
//                     className="small-edit-btn"
//                     onClick={() => openEditTacticModal(goal.id, tac)}
//                   >
//                     ✏️ Edit Tactic
//                   </button>
//                 </div>
//               ))}
//             </li>
//           ))}
//         </ul>
//       )}

//       {/* Obstacle Modal */}
//       {showObstacleModal && (
//         <div className="modal-overlay">
//           <div className="modal">
//             <h2>Add Obstacle</h2>
//             <input
//               type="text"
//               placeholder="Description"
//               value={obstacleInput.description}
//               onChange={(e) =>
//                 setObstacleInput({
//                   ...obstacleInput,
//                   description: e.target.value,
//                 })
//               }
//             />
//             <label>
//               <input
//                 type="checkbox"
//                 checked={obstacleInput.isovercome}
//                 onChange={(e) =>
//                   setObstacleInput({
//                     ...obstacleInput,
//                     isovercome: e.target.checked,
//                   })
//                 }
//               />
//               Is Overcome?
//             </label>
//             <div className="modal-actions">
//               <button className="next-btn" onClick={handleObstacleSubmit}>
//                 Save
//               </button>
//               <button
//                 className="next-btn cancel"
//                 onClick={() => setShowObstacleModal(false)}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Tactic Modal */}
//       {showTacticModal && (
//         <div className="modal-overlay">
//           <div className="modal">
//             <h2>Add Tactic</h2>
//             <input
//               type="text"
//               placeholder="Enter tactic..."
//               value={tacticInput}
//               onChange={(e) => setTacticInput(e.target.value)}
//             />
//             <div className="modal-actions">
//               <button className="next-btn" onClick={handleTacticSubmit}>
//                 Save
//               </button>
//               <button
//                 className="next-btn cancel"
//                 onClick={() => setShowTacticModal(false)}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Edit Goal Modal */}
//       {showEditModal && (
//         <div className="modal-overlay">
//           <div className="modal">
//             <h2>Edit Goal</h2>

//             <input
//               type="text"
//               placeholder="Title"
//               value={editGoalInput.title}
//               onChange={(e) =>
//                 setEditGoalInput({ ...editGoalInput, title: e.target.value })
//               }
//             />
//             <input
//               type="text"
//               placeholder="Description"
//               value={editGoalInput.description}
//               onChange={(e) =>
//                 setEditGoalInput({
//                   ...editGoalInput,
//                   description: e.target.value,
//                 })
//               }
//             />
//             <input
//               type="date"
//               value={editGoalInput.deadline}
//               onChange={(e) =>
//                 setEditGoalInput({ ...editGoalInput, deadline: e.target.value })
//               }
//             />
//             <select
//               value={editGoalInput.status}
//               onChange={(e) =>
//                 setEditGoalInput({ ...editGoalInput, status: e.target.value })
//               }
//             >
//               <option value="Completed">Completed</option>
//               <option value="In Progress">In Progress</option>
//             </select>

//             {/* <h3>Obstacles</h3>
//             {editGoalInput.obstacles.map((obs, index) => (
//               <div key={index}>
//                 <input
//                   type="text"
//                   placeholder="Obstacle description"
//                   value={obs.description}
//                   onChange={(e) => {
//                     const updated = [...editGoalInput.obstacles];
//                     updated[index].description = e.target.value;
//                     setEditGoalInput({ ...editGoalInput, obstacles: updated });
//                   }}
//                 />
//                 <label>
//                   <input
//                     type="checkbox"
//                     checked={obs.isovercome}
//                     onChange={(e) => {
//                       const updated = [...editGoalInput.obstacles];
//                       updated[index].isovercome = e.target.checked;
//                       setEditGoalInput({
//                         ...editGoalInput,
//                         obstacles: updated,
//                       });
//                     }}
//                   />
//                   Is Overcome
//                 </label>
//               </div>
//             ))}*/}

//             {/* <h3>Tactics</h3>
//             {editGoalInput.tactics.map((tac, index) => (
//               <div key={index}>
//                 <input
//                   type="text"
//                   placeholder="Tactic description"
//                   value={tac.description}
//                   onChange={(e) => {
//                     const updated = [...editGoalInput.tactics];
//                     updated[index].description = e.target.value;
//                     setEditGoalInput({ ...editGoalInput, tactics: updated });
//                   }}
//                 />
//               </div>
//             ))} */}

//             <div className="modal-actions">
//               <button className="next-btn" onClick={handleGoalUpdate}>
//                 Update
//               </button>
//               <button
//                 className="next-btn cancel"
//                 onClick={() => setShowEditModal(false)}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//       {showEditObstacleModal && selectedObstacle && (
//         <div className="modal-overlay">
//           <div className="modal">
//             <h2>Edit Obstacle</h2>
//             <input
//               type="text"
//               placeholder="Description"
//               value={selectedObstacle.description}
//               onChange={(e) =>
//                 setSelectedObstacle({
//                   ...selectedObstacle,
//                   description: e.target.value,
//                 })
//               }
//             />
//             <label>
//               <input
//                 type="checkbox"
//                 checked={selectedObstacle.isovercome}
//                 onChange={(e) =>
//                   setSelectedObstacle({
//                     ...selectedObstacle,
//                     isovercome: e.target.checked,
//                   })
//                 }
//               />
//               Is Overcome
//             </label>
//             <div className="modal-actions">
//               <button className="next-btn" onClick={handleObstacleUpdate}>
//                 Update
//               </button>
//               <button
//                 className="next-btn cancel"
//                 onClick={() => setShowEditObstacleModal(false)}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//       {showEditTacticModal && selectedTactic && (
//         <div className="modal-overlay">
//           <div className="modal">
//             <h2>Edit Tactic</h2>
//             <input
//               type="text"
//               placeholder="Description"
//               value={selectedTactic.description}
//               onChange={(e) =>
//                 setSelectedTactic({
//                   ...selectedTactic,
//                   description: e.target.value,
//                 })
//               }
//             />
//             <div className="modal-actions">
//               <button className="next-btn" onClick={handleTacticUpdate}>
//                 Update
//               </button>
//               <button
//                 className="next-btn cancel"
//                 onClick={() => setShowEditTacticModal(false)}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AllGoals;

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  addObstracleToGoal,
  addTacticsToGoal,
  updateGoalById,
  updateObstacleById,
  updateTacticById,
  deleteObstacleById, // ✅
  deleteTacticById,
  deleteGoalById,
} from "../redux/StoreSlice";
import "./AllGoals.css";

const AllGoals = () => {
  const { qid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [selectedGoalId, setSelectedGoalId] = useState(null);

  // Modals
  const [showObstacleModal, setShowObstacleModal] = useState(false);
  const [showTacticModal, setShowTacticModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showEditObstacleModal, setShowEditObstacleModal] = useState(false);
  const [showEditTacticModal, setShowEditTacticModal] = useState(false);

  const handleDeleteObstacle = (gid, oid) => {
    dispatch(deleteObstacleById({ gid, oid }));
  };

  const handleDeleteTactic = (gid, tid) => {
    dispatch(deleteTacticById({ gid, tid }));
  };
  const handleDeleteGoal = (qid, gid) => {
    dispatch(deleteGoalById({ qid, gid }));
  };

  // Inputs
  const [obstacleInput, setObstacleInput] = useState({
    description: "",
    isovercome: false,
  });
  const [tacticInput, setTacticInput] = useState("");
  const [editGoalInput, setEditGoalInput] = useState({
    title: "",
    description: "",
    deadline: "",
    status: "",
  });
  const [selectedObstacle, setSelectedObstacle] = useState(null);
  const [selectedTactic, setSelectedTactic] = useState(null);

  const quarter = useSelector((state) =>
    state.tracker.quarters.find((q) => q.qid.toString() === qid)
  );

  if (!quarter) return <div className="center-text">Quarter not found</div>;

  const handleAddGoalClick = () => navigate(`/addgoal/${qid}`);

  const openObstacleModal = (goalId) => {
    setSelectedGoalId(goalId);
    setObstacleInput({ description: "", isovercome: false });
    setShowObstacleModal(true);
  };

  const openTacticModal = (goalId) => {
    setSelectedGoalId(goalId);
    setTacticInput("");
    setShowTacticModal(true);
  };

  const openEditModal = (goal) => {
    setSelectedGoalId(goal.id);
    setEditGoalInput({
      title: goal.title,
      description: goal.description,
      deadline: goal.deadline,
      status: goal.status,
    });
    setShowEditModal(true);
  };

  const openEditObstacleModal = (gid, obs) => {
    setSelectedGoalId(gid);
    setSelectedObstacle({ ...obs });
    setShowEditObstacleModal(true);
  };

  const openEditTacticModal = (gid, tac) => {
    setSelectedGoalId(gid);
    setSelectedTactic({ ...tac });
    setShowEditTacticModal(true);
  };

  const handleObstacleSubmit = () => {
    dispatch(
      addObstracleToGoal({ gid: selectedGoalId, obstracle: obstacleInput })
    );
    setShowObstacleModal(false);
  };

  const handleTacticSubmit = () => {
    dispatch(
      addTacticsToGoal({
        gid: selectedGoalId,
        tactic: { description: tacticInput },
      })
    );
    setShowTacticModal(false);
  };

  const handleGoalUpdate = () => {
    dispatch(
      updateGoalById({ gid: selectedGoalId, updatedGoal: editGoalInput })
    );
    setShowEditModal(false);
  };

  const handleObstacleUpdate = () => {
    dispatch(
      updateObstacleById({
        gid: selectedGoalId,
        oid: selectedObstacle.id,
        updatedObstacle: {
          description: selectedObstacle.description,
          isovercome: selectedObstacle.isovercome,
        },
      })
    );
    setShowEditObstacleModal(false);
  };

  const handleTacticUpdate = () => {
    dispatch(
      updateTacticById({
        gid: selectedGoalId,
        tid: selectedTactic.id,
        updatedTactic: {
          description: selectedTactic.description,
        },
      })
    );
    setShowEditTacticModal(false);
  };

  return (
    <div className="allgoals-container">
      <h1 className="quarter-title">Goals for: {quarter.title}</h1>
      <button className="add-goal-btn" onClick={handleAddGoalClick}>
        + Add Goal
      </button>

      {quarter.goals.length === 0 ? (
        <div className="center-text">No goals found for this quarter.</div>
      ) : (
        <ul className="goals-list">
          {quarter.goals.map((goal) => (
            <li key={goal.id} className="goal-card">
              <h3>{goal.title}</h3>
              <p>
                <strong>Description:</strong> {goal.description}
              </p>
              <p>
                <strong>Deadline:</strong> {goal.deadline}
              </p>
              <p>
                <strong>Status:</strong> {goal.status}
              </p>

              {/* <div>
                <strong>Obstacles:</strong>
                {goal.obstacles?.length > 0 ? (
                  goal.obstacles.map((obs) => (
                    <div key={obs.id} className="inline-edit-box">
                      <span>
                        {obs.description} (
                        {obs.isovercome ? "Overcome" : "Pending"})
                      </span>
                      <button
                        className="small-edit-btn"
                        onClick={() => openEditObstacleModal(goal.id, obs)}
                      >
                        ✏️ Edit Obstacle
                      </button>
                    </div>
                  ))
                ) : (
                  <div>None</div>
                )}
              </div> */}
              <strong>Obstacles:</strong>
              {goal.obstacles?.length > 0 ? (
                goal.obstacles.map((obs) => (
                  <div key={obs.id} className="inline-edit-box">
                    <span>
                      {obs.description} (
                      {obs.isovercome ? "Overcome" : "Pending"})
                    </span>
                    <button
                      className="small-edit-btn"
                      onClick={() => openEditObstacleModal(goal.id, obs)}
                    >
                      ✏️ Edit
                    </button>
                    <button
                      className="small-edit-btn danger"
                      onClick={() => handleDeleteObstacle(goal.id, obs.id)}
                    >
                      🗑️ Delete
                    </button>
                  </div>
                ))
              ) : (
                <div>None</div>
              )}

              <div>
                <strong>Tactics:</strong>
                {goal.tactics?.length > 0 ? (
                  goal.tactics.map((tac) => (
                    <div key={tac.id} className="inline-edit-box">
                      <span>{tac.description}</span>
                      <button
                        className="small-edit-btn"
                        onClick={() => openEditTacticModal(goal.id, tac)}
                      >
                        ✏️ Edit
                      </button>
                      <button
                        className="small-edit-btn danger"
                        onClick={() => handleDeleteTactic(goal.id, tac.id)}
                      >
                        🗑️ Delete
                      </button>
                    </div>
                  ))
                ) : (
                  <div>None</div>
                )}
              </div>

              <button
                className="add-goal"
                onClick={() => openObstacleModal(goal.id)}
              >
                + Add Obstacle
              </button>
              <button
                className="add-goal"
                onClick={() => openTacticModal(goal.id)}
              >
                + Add Tactic
              </button>
              <button className="add-goal" onClick={() => openEditModal(goal)}>
                ✏️ Edit Goal
              </button>
              <button
                className="add-goal danger"
                onClick={() => handleDeleteGoal(quarter.qid, goal.id)}
              >
                🗑️ Delete Goal
              </button>
            </li>
          ))}
          {/* eeeeeeeee */}
        </ul>
      )}

      {/* Obstacle Modal */}
      {showObstacleModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Add Obstacle</h2>
            <input
              type="text"
              placeholder="Description"
              value={obstacleInput.description}
              onChange={(e) =>
                setObstacleInput({
                  ...obstacleInput,
                  description: e.target.value,
                })
              }
            />
            <label>
              <input
                type="checkbox"
                checked={obstacleInput.isovercome}
                onChange={(e) =>
                  setObstacleInput({
                    ...obstacleInput,
                    isovercome: e.target.checked,
                  })
                }
              />
              Is Overcome?
            </label>
            <div className="modal-actions">
              <button className="next-btn" onClick={handleObstacleSubmit}>
                Save
              </button>
              <button
                className="next-btn cancel"
                onClick={() => setShowObstacleModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tactic Modal */}
      {showTacticModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Add Tactic</h2>
            <input
              type="text"
              placeholder="Enter tactic..."
              value={tacticInput}
              onChange={(e) => setTacticInput(e.target.value)}
            />
            <div className="modal-actions">
              <button className="next-btn" onClick={handleTacticSubmit}>
                Save
              </button>
              <button
                className="next-btn cancel"
                onClick={() => setShowTacticModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Goal Modal */}
      {showEditModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Edit Goal</h2>
            <input
              type="text"
              placeholder="Title"
              value={editGoalInput.title}
              onChange={(e) =>
                setEditGoalInput({ ...editGoalInput, title: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Description"
              value={editGoalInput.description}
              onChange={(e) =>
                setEditGoalInput({
                  ...editGoalInput,
                  description: e.target.value,
                })
              }
            />
            <input
              type="date"
              value={editGoalInput.deadline}
              onChange={(e) =>
                setEditGoalInput({ ...editGoalInput, deadline: e.target.value })
              }
            />
            <select
              value={editGoalInput.status}
              onChange={(e) =>
                setEditGoalInput({ ...editGoalInput, status: e.target.value })
              }
            >
              <option value="Completed">Completed</option>
              <option value="In Progress">In Progress</option>
            </select>
            <div className="modal-actions">
              <button className="next-btn" onClick={handleGoalUpdate}>
                Update
              </button>
              <button
                className="next-btn cancel"
                onClick={() => setShowEditModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Obstacle Modal */}
      {showEditObstacleModal && selectedObstacle && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Edit Obstacle</h2>
            <input
              type="text"
              value={selectedObstacle.description}
              onChange={(e) =>
                setSelectedObstacle({
                  ...selectedObstacle,
                  description: e.target.value,
                })
              }
            />
            <label>
              <input
                type="checkbox"
                checked={selectedObstacle.isovercome}
                onChange={(e) =>
                  setSelectedObstacle({
                    ...selectedObstacle,
                    isovercome: e.target.checked,
                  })
                }
              />
              Is Overcome?
            </label>
            <div className="modal-actions">
              <button className="next-btn" onClick={handleObstacleUpdate}>
                Update
              </button>
              <button
                className="next-btn cancel"
                onClick={() => setShowEditObstacleModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Tactic Modal */}
      {showEditTacticModal && selectedTactic && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Edit Tactic</h2>
            <input
              type="text"
              value={selectedTactic.description}
              onChange={(e) =>
                setSelectedTactic({
                  ...selectedTactic,
                  description: e.target.value,
                })
              }
            />
            <div className="modal-actions">
              <button className="next-btn" onClick={handleTacticUpdate}>
                Update
              </button>
              <button
                className="next-btn cancel"
                onClick={() => setShowEditTacticModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllGoals;
