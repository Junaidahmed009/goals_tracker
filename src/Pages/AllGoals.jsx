// // import React, { useState } from "react";
// // import { useSelector } from "react-redux";
// // import { useNavigate, useParams } from "react-router-dom";
// // import { addObstracleToGoal, addTacticsToGoal } from "../redux/StoreSlice";
// // import "./AllGoals.css";

// // const AllGoals = () => {
// //   const { qid } = useParams();
// //   const navigate = useNavigate();

// //   const [showObstacleModal, setShowObstacleModal] = useState(false);
// //   const [showTacticModal, setShowTacticModal] = useState(false);
// //   const [obstacleInput, setObstacleInput] = useState({
// //     description: "",
// //     isovercome: false,
// //   });
// //   const [tacticInput, setTacticInput] = useState("");
// //   const [selectedGoalId, setSelectedGoalId] = useState(null);

// //   const quarter = useSelector((state) =>
// //     state.tracker.quarters.find((q) => q.qid.toString() === qid)
// //   );

// //   if (!quarter) {
// //     return <div className="center-text">Quarter not found</div>;
// //   }

// //   const openObstacleModal = (goalId) => {
// //     setSelectedGoalId(goalId);
// //     setShowObstacleModal(true);
// //   };

// //   const openTacticModal = (goalId) => {
// //     setSelectedGoalId(goalId);
// //     setShowTacticModal(true);
// //   };

// //   const handleObstacleSubmit = () => {
// //     console.log("Saving obstacle:", obstacleInput, "to goal:", selectedGoalId);
// //     setShowObstacleModal(false);
// //     setObstacleInput("");
// //   };

// //   const handleTacticSubmit = () => {
// //     // console.log("Saving tactic:", tacticInput, "to goal:", selectedGoalId);
// //     dispatch(addGoaltoQuater({ qid, goal }));
// //     setShowTacticModal(false);
// //     setTacticInput("");
// //   };

// //   function handleAddGoalClick() {
// //     navigate(`/addgoal/${qid}`);
// //   }

// //   return (
// //     <div className="allgoals-container">
// //       <h1 className="quarter-title">Goals for: {quarter.title}</h1>
// //       <button className="add-goal-btn" onClick={handleAddGoalClick}>
// //         + Add Goal
// //       </button>

// //       {quarter.goals.length === 0 ? (
// //         <div className="center-text">No goals found for this quarter.</div>
// //       ) : (
// //         <ul className="goals-list">
// //           {quarter.goals.map((goal) => (
// //             <li
// //               onClick={() => {
// //                 console.log(goal.id);
// //               }}
// //               key={goal.id}
// //               className="goal-card"
// //             >
// //               <h3>{goal.title}</h3>
// //               <p>
// //                 <strong>Description:</strong> {goal.description}
// //               </p>
// //               <p>
// //                 <strong>Deadline:</strong> {goal.deadline}
// //               </p>
// //               <p>
// //                 <strong>Status:</strong> {goal.status}
// //               </p>
// //               <p>
// //                 <strong>Ostracle:</strong> {goal.status}
// //               </p>
// //               <p>
// //                 <strong>tactic:</strong> {goal.status}
// //               </p>
// //               <button
// //                 className="add-goal-btn"
// //                 onClick={() => openObstacleModal(goal.id)}
// //               >
// //                 + Add Obstacle
// //               </button>
// //               <button
// //                 className="add-goal-btn"
// //                 onClick={() => openTacticModal(goal.id)}
// //               >
// //                 + Add Tactic
// //               </button>
// //             </li>
// //           ))}
// //         </ul>
// //       )}

// //       {/* Obstacle Modal */}
// //       {showObstacleModal && (
// //         <div className="modal-overlay">
// //           <div className="modal">
// //             <h2>Add Obstacle</h2>
// //             <input
// //               type="text"
// //               placeholder="Description"
// //               value={obstacleInput}
// //               onChange={(e) => setObstacleInput(e.target.value)}
// //             />
// //             <label htmlFor="check">Isovercome</label>
// //             <input
// //               id="check"
// //               type="checkbox"
// //               // placeholder=""
// //               value={obstacleInput}
// //               onChange={(e) => setObstacleInput(e.target.value)}
// //             />
// //             <div className="modal-actions">
// //               <button className="next-btn" onClick={handleObstacleSubmit}>
// //                 Save
// //               </button>
// //               <button
// //                 className="next-btn cancel"
// //                 onClick={() => setShowObstacleModal(false)}
// //               >
// //                 Cancel
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {/* Tactic Modal */}
// //       {showTacticModal && (
// //         <div className="modal-overlay">
// //           <div className="modal">
// //             <h2>Add Tactic</h2>
// //             <input
// //               type="text"
// //               placeholder="Enter tactic..."
// //               value={tacticInput}
// //               onChange={(e) => setTacticInput(e.target.value)}
// //             />
// //             <div className="modal-actions">
// //               <button className="next-btn" onClick={handleTacticSubmit}>
// //                 Save
// //               </button>
// //               <button
// //                 className="next-btn cancel"
// //                 onClick={() => setShowTacticModal(false)}
// //               >
// //                 Cancel
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default AllGoals;

// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate, useParams } from "react-router-dom";
// import { addObstracleToGoal, addTacticsToGoal } from "../redux/StoreSlice";
// import "./AllGoals.css";

// const AllGoals = () => {
//   const { qid } = useParams();
//   const navigate = useNavigate();
//   const dispatch = useDispatch(); // ✅ Add dispatch

//   const [showObstacleModal, setShowObstacleModal] = useState(false);
//   const [showTacticModal, setShowTacticModal] = useState(false);
//   const [obstacleInput, setObstacleInput] = useState({
//     description: "",
//     isovercome: false,
//   });
//   const [tacticInput, setTacticInput] = useState("");
//   const [selectedGoalId, setSelectedGoalId] = useState(null);
//   ////-----------------------
//   const [editGoalInput, setEditGoalInput] = useState({
//     title: "",
//     description: "",
//     deadline: "",
//     status: "",
//     obstacles: [], // ✅ add this
//     tactics: [], // ✅ and this
//   });
//   const openEditModal = (goal) => {
//     setSelectedGoalId(goal.id);
//     setEditGoalInput({
//       title: goal.title,
//       description: goal.description,
//       deadline: goal.deadline,
//       status: goal.status,
//       obstacles: goal.obstacles || [], // ✅ ensure default
//       tactics: goal.tactics || [],
//     });
//     setShowEditModal(true);
//   };
//   const handleGoalUpdate = () => {
//     dispatch(
//       updateGoalById({
//         gid: selectedGoalId,
//         updatedGoal: editGoalInput,
//       })
//     );
//     setShowEditModal(false);
//   };

//   //==================

//   const quarter = useSelector((state) =>
//     state.tracker.quarters.find((q) => q.qid.toString() === qid)
//   );

//   if (!quarter) {
//     return <div className="center-text">Quarter not found</div>;
//   }

//   const openObstacleModal = (goalId) => {
//     setSelectedGoalId(goalId);
//     setShowObstacleModal(true);
//   };

//   const openTacticModal = (goalId) => {
//     setSelectedGoalId(goalId);
//     setShowTacticModal(true);
//   };

//   const handleObstacleSubmit = () => {
//     console.log(selectedGoalId, obstacleInput);
//     dispatch(
//       addObstracleToGoal({
//         gid: selectedGoalId,
//         obstracle: obstacleInput,
//       })
//     );
//     setShowObstacleModal(false);
//     setObstacleInput({ description: "", isovercome: false });
//   };

//   const handleTacticSubmit = () => {
//     dispatch(
//       addTacticsToGoal({
//         gid: selectedGoalId,
//         tactic: {
//           description: tacticInput,
//         },
//       })
//     );
//     setShowTacticModal(false);
//     setTacticInput("");
//   };

//   function handleAddGoalClick() {
//     navigate(`/addgoal/${qid}`);
//   }

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
//                 {goal.obstacles && goal.obstacles.length > 0 ? (
//                   goal.obstacles.map((o, i) => (
//                     <div key={i}>
//                       - {o.description} ({o.isovercome ? "Overcome" : "Pending"}
//                       )
//                     </div>
//                   ))
//                 ) : (
//                   <div>None</div>
//                 )}
//               </div>
//               <div>
//                 <strong>Tactics:</strong>
//                 {goal.tactics && goal.tactics.length > 0
//                   ? goal.tactics.map((t, i) => (
//                       <div key={i}>- {t.description}</div>
//                     ))
//                   : "None"}
//               </div>
//               <button
//                 className="add-goal-btn"
//                 onClick={() => openObstacleModal(goal.id)}
//               >
//                 + Add Obstacle
//               </button>
//               <button
//                 className="add-goal-btn"
//                 onClick={() => openTacticModal(goal.id)}
//               >
//                 + Add Tactic
//               </button>
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
//             <input
//               type="text"
//               placeholder="Status"
//               value={editGoalInput.status}
//               onChange={(e) =>
//                 setEditGoalInput({ ...editGoalInput, status: e.target.value })
//               }
//             />

//             <h3>Obstacles</h3>
//             {editGoalInput.obstacles.map((obs, index) => (
//               <div key={index} style={{ marginBottom: "0.5rem" }}>
//                 <input
//                   type="text"
//                   placeholder="Obstacle description"
//                   value={obs.description}
//                   onChange={(e) => {
//                     const newObstacles = [...editGoalInput.obstacles];
//                     newObstacles[index].description = e.target.value;
//                     setEditGoalInput({
//                       ...editGoalInput,
//                       obstacles: newObstacles,
//                     });
//                   }}
//                 />
//                 <label>
//                   <input
//                     type="checkbox"
//                     checked={obs.isovercome}
//                     onChange={(e) => {
//                       const newObstacles = [...editGoalInput.obstacles];
//                       newObstacles[index].isovercome = e.target.checked;
//                       setEditGoalInput({
//                         ...editGoalInput,
//                         obstacles: newObstacles,
//                       });
//                     }}
//                   />
//                   Is Overcome
//                 </label>
//               </div>
//             ))}

//             <h3>Tactics</h3>
//             {editGoalInput.tactics.map((tac, index) => (
//               <div key={index} style={{ marginBottom: "0.5rem" }}>
//                 <input
//                   type="text"
//                   placeholder="Tactic description"
//                   value={tac.description}
//                   onChange={(e) => {
//                     const newTactics = [...editGoalInput.tactics];
//                     newTactics[index].description = e.target.value;
//                     setEditGoalInput({ ...editGoalInput, tactics: newTactics });
//                   }}
//                 />
//               </div>
//             ))}

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
} from "../redux/StoreSlice";
import "./AllGoals.css";

const AllGoals = () => {
  const { qid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showObstacleModal, setShowObstacleModal] = useState(false);
  const [showTacticModal, setShowTacticModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedGoalId, setSelectedGoalId] = useState(null);

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
    obstacles: [],
    tactics: [],
  });

  const quarter = useSelector((state) =>
    state.tracker.quarters.find((q) => q.qid.toString() === qid)
  );

  if (!quarter) return <div className="center-text">Quarter not found</div>;

  const handleAddGoalClick = () => navigate(`/addgoal/${qid}`);

  const openObstacleModal = (goalId) => {
    setSelectedGoalId(goalId);
    setShowObstacleModal(true);
  };

  const openTacticModal = (goalId) => {
    setSelectedGoalId(goalId);
    setShowTacticModal(true);
  };

  const openEditModal = (goal) => {
    setSelectedGoalId(goal.id);
    setEditGoalInput({
      title: goal.title,
      description: goal.description,
      deadline: goal.deadline,
      status: goal.status,
      obstacles: goal.obstacles || [],
      tactics: goal.tactics || [],
    });
    setShowEditModal(true);
  };

  const handleObstacleSubmit = () => {
    dispatch(
      addObstracleToGoal({ gid: selectedGoalId, obstracle: obstacleInput })
    );
    setObstacleInput({ description: "", isovercome: false });
    setShowObstacleModal(false);
  };

  const handleTacticSubmit = () => {
    dispatch(
      addTacticsToGoal({
        gid: selectedGoalId,
        tactic: { description: tacticInput },
      })
    );
    setTacticInput("");
    setShowTacticModal(false);
  };

  const handleGoalUpdate = () => {
    dispatch(
      updateGoalById({ gid: selectedGoalId, updatedGoal: editGoalInput })
    );
    setShowEditModal(false);
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

              <div>
                <strong>Obstacles:</strong>
                {goal.obstacles?.length > 0 ? (
                  goal.obstacles.map((o, i) => (
                    <div key={i}>
                      - {o.description} ({o.isovercome ? "Overcome" : "Pending"}
                      )
                    </div>
                  ))
                ) : (
                  <div>None</div>
                )}
              </div>

              <div>
                <strong>Tactics:</strong>
                {goal.tactics?.length > 0 ? (
                  goal.tactics.map((t, i) => (
                    <div key={i}>- {t.description}</div>
                  ))
                ) : (
                  <div>None</div>
                )}
              </div>

              <button
                className="add-goal-btn"
                onClick={() => openObstacleModal(goal.id)}
              >
                + Add Obstacle
              </button>
              <button
                className="add-goal-btn"
                onClick={() => openTacticModal(goal.id)}
              >
                + Add Tactic
              </button>
              <button
                className="add-goal-btn"
                onClick={() => openEditModal(goal)}
              >
                ✏️ Edit Goal
              </button>
            </li>
          ))}
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
            <input
              type="text"
              placeholder="Status"
              value={editGoalInput.status}
              onChange={(e) =>
                setEditGoalInput({ ...editGoalInput, status: e.target.value })
              }
            />

            <h3>Obstacles</h3>
            {editGoalInput.obstacles.map((obs, index) => (
              <div key={index}>
                <input
                  type="text"
                  placeholder="Obstacle description"
                  value={obs.description}
                  onChange={(e) => {
                    const updated = [...editGoalInput.obstacles];
                    updated[index].description = e.target.value;
                    setEditGoalInput({ ...editGoalInput, obstacles: updated });
                  }}
                />
                <label>
                  <input
                    type="checkbox"
                    checked={obs.isovercome}
                    onChange={(e) => {
                      const updated = [...editGoalInput.obstacles];
                      updated[index].isovercome = e.target.checked;
                      setEditGoalInput({
                        ...editGoalInput,
                        obstacles: updated,
                      });
                    }}
                  />
                  Is Overcome
                </label>
              </div>
            ))}

            <h3>Tactics</h3>
            {editGoalInput.tactics.map((tac, index) => (
              <div key={index}>
                <input
                  type="text"
                  placeholder="Tactic description"
                  value={tac.description}
                  onChange={(e) => {
                    const updated = [...editGoalInput.tactics];
                    updated[index].description = e.target.value;
                    setEditGoalInput({ ...editGoalInput, tactics: updated });
                  }}
                />
              </div>
            ))}

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
    </div>
  );
};

export default AllGoals;
