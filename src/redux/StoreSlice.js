import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  quarters: [],
};

const quarterSlice = createSlice({
  name: "tracker",
  initialState,
  reducers: {
    addquarter: (state, action) => {
      const newquarter = {
        qid: nanoid(),
        title: action.payload.title,
        start: action.payload.startDate,
        end: action.payload.endDate,
        goals: [],
      };
      state.quarters.push(newquarter);
    },
    addGoaltoQuater: (state, action) => {
      const { qId, goal } = action.payload;
      const quarter = state.quarters.find((q) => q.qId === qId);
      if (quarter) {
        quarter.goals.push({
          ...goal,
          id: nanoid(),
          obstacles: [],
          tactics: [],
        });
      }
    },
    addObstracleToGoal: (state, action) => {
      const { gid, obstracle } = action.payload;
      for (const quarter of state.quarters) {
        const goal = quarter.goals.find((g) => g.id === gid);
        if (goal) {
          goal.obstacles.push({
            ...obstracle,
            id: nanoid(),
          });
          break;
        }
      }
    },

    addTacticsToGoal: (state, action) => {
      const { gid, tactic } = action.payload;
      for (const quarter of state.quarters) {
        const goal = quarter.goals.find((g) => g.id === gid);
        if (goal) {
          goal.tactics.push({
            ...tactic,
            id: nanoid(),
          });
          break;
        }
      }
    },
    updateGoalById: (state, action) => {
      const { gid, updatedGoal } = action.payload;
      for (const quarter of state.quarters) {
        const goalIndex = quarter.goals.findIndex((g) => g.id === gid);
        if (goalIndex !== -1) {
          quarter.goals[goalIndex] = {
            ...quarter.goals[goalIndex],
            ...updatedGoal,
          };
          break;
        }
      }
    },
    updateObstacleById: (state, action) => {
      const { gid, oid, updatedObstacle } = action.payload;
      for (const quarter of state.quarters) {
        const goal = quarter.goals.find((g) => g.id === gid);
        if (goal) {
          const obsIndex = goal.obstacles.findIndex((obs) => obs.id === oid);
          if (obsIndex !== -1) {
            goal.obstacles[obsIndex] = {
              ...goal.obstacles[obsIndex],
              ...updatedObstacle,
            };
          }
          break;
        }
      }
    },

    updateTacticById: (state, action) => {
      const { gid, tid, updatedTactic } = action.payload;
      for (const quarter of state.quarters) {
        const goal = quarter.goals.find((g) => g.id === gid);
        if (goal) {
          const tacticIndex = goal.tactics.findIndex((tac) => tac.id === tid);
          if (tacticIndex !== -1) {
            goal.tactics[tacticIndex] = {
              ...goal.tactics[tacticIndex],
              ...updatedTactic,
            };
          }
          break;
        }
      }
    },
    deleteObstacleById: (state, action) => {
      const { gid, oid } = action.payload;
      for (const quarter of state.quarters) {
        const goal = quarter.goals.find((g) => g.id === gid);
        if (goal) {
          goal.obstacles = goal.obstacles.filter((obs) => obs.id !== oid);
          break;
        }
      }
    },

    deleteTacticById: (state, action) => {
      const { gid, tid } = action.payload;
      for (const quarter of state.quarters) {
        const goal = quarter.goals.find((g) => g.id === gid);
        if (goal) {
          goal.tactics = goal.tactics.filter((tac) => tac.id !== tid);
          break;
        }
      }
    },
    deleteGoalById: (state, action) => {
      const { qid, gid } = action.payload;
      const quarter = state.quarters.find((q) => q.qid === qid);
      if (quarter) {
        quarter.goals = quarter.goals.filter((goal) => goal.id !== gid);
      }
    },
  },
});
export const {
  addquarter,
  addGoaltoQuater,
  addObstracleToGoal,
  addTacticsToGoal,
  updateGoalById,
  updateObstacleById,
  updateTacticById,
  deleteObstacleById,
  deleteTacticById,
  deleteGoalById,
} = quarterSlice.actions;
export default quarterSlice.reducer;
