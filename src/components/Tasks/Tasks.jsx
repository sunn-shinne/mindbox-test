import React, { useEffect } from 'react';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { selectors as tasksSelectors, checkTask, setTasks } from '../../slices/tasksSlice.js';
import TaskItem from './TaskItem.jsx';

const mappingFilter = {
  all: (tasks) => tasks,
  active: (tasks) => _.filter(tasks, ['done', false]),
  completed: (tasks) => _.filter(tasks, ['done', true]),
};

const Tasks = () => {
  const tasks = useSelector((tasksSelectors.selectAll));
  const { currentFilter } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const currentTasks = mappingFilter[currentFilter](tasks);

  useEffect(() => {
    const stringTasks = localStorage.getItem('tasks');
    const parsedtasks = JSON.parse(stringTasks);
    dispatch(setTasks(parsedtasks ?? []));
  }, [dispatch]);

  useEffect(() => {
    const stringTasks = JSON.stringify(tasks);
    localStorage.setItem('tasks', stringTasks);
  }, [tasks]);

  const checkTaskHandler = (id) => () => dispatch(checkTask({ id }));

  const renderTask = (task) => (
    <TaskItem task={task} key={_.uniqueId()} onCheckTask={checkTaskHandler(task.id)} />
  );

  return (
    <div className="overflow-auto px-5">
      {currentTasks.map(renderTask)}
    </div>
  );
};

export default Tasks;
