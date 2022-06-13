import React from 'react';
import ClearCompletedBtn from './ClearCompetedBtn.jsx';
import FilterControls from './FilterControls.jsx';
import TasksLeftInfo from './TasksLeftInfo.jsx';

const TasksControls = () => (
  <div className="container mt-auto pt-1 border-top small text-muted">
    <div className="row">
      <div className="col-3 py-1">
        <TasksLeftInfo />
      </div>
      <div className="col-6 text-center">
        <FilterControls />
      </div>
      <div className="col-3">
        <ClearCompletedBtn />
      </div>
    </div>
  </div>
);

export default TasksControls;
