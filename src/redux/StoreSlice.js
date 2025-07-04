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
  },
});
export const {
  addquarter,
  addGoaltoQuater,
  addObstracleToGoal,
  addTacticsToGoal,
  updateGoalById,
} = quarterSlice.actions;
export default quarterSlice.reducer;
