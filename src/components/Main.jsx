import React from 'react';
import TaskInput from './Tasks/TaskInput.jsx';
import Tasks from './Tasks/Tasks.jsx';
import TasksControls from './TasksControls/TasksControls.jsx';

const Main = () => (
  <div className="container h-100 mb-4 mt-1 overflow-hidden">
    <div className="row h-100 flex-md-row justify-content-center align-content-center">
      <div className="h-100 my-4 col-8 col-md-6 col-xxl-4 overflow-hidden rounded">
        <div className="d-flex flex-column h-100 shadow rounded bg-white mb-4">
          <TaskInput />
          <Tasks />
          <TasksControls />
        </div>
      </div>
    </div>
  </div>
);

export default Main;
