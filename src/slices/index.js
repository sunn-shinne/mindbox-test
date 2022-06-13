import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice.js';
import uiReducer from './uiSlice.js';

export default configureStore({
  reducer: {
    tasks: tasksReducer,
    ui: uiReducer,
  },
});
