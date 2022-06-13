/* eslint-disable no-param-reassign */
import {
  createSlice,
  createEntityAdapter,
} from '@reduxjs/toolkit';

const tasksAdapter = createEntityAdapter();
const initialState = tasksAdapter.getInitialState();

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks: tasksAdapter.setAll,
    addTask: tasksAdapter.addOne,
    checkTask: (state, action) => {
      const { id } = action.payload;
      const currentTask = Object.values(state.entities).find((task) => task.id === id);
      tasksAdapter.updateOne(state, { id, changes: { done: !currentTask.done } });
    },
    removeCompletedTasks: (state) => {
      const completedTasksIds = Object.values(state.entities)
        .filter((task) => task.done)
        .map((task) => task.id);
      tasksAdapter.removeMany(state, completedTasksIds);
    },
  },
});

export const selectors = tasksAdapter.getSelectors((state) => state.tasks);
export const {
  setTasks,
  addTask,
  checkTask,
  removeCompletedTasks,
} = tasksSlice.actions;
export default tasksSlice.reducer;
