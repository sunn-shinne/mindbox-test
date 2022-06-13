/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { removeCompletedTasks } from './tasksSlice.js';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    currentFilter: 'all',
  },
  reducers: {
    setCurrentFilter: (state, { payload }) => {
      state.currentFilter = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(removeCompletedTasks, (state) => {
      state.currentFilter = 'all';
    });
  },
});

export const { setCurrentFilter } = uiSlice.actions;
export default uiSlice.reducer;
