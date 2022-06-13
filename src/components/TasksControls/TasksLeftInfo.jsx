import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectors as tasksSelectors } from '../../slices/tasksSlice.js';

const TasksLeftInfo = () => {
  const { t } = useTranslation();
  const tasks = useSelector(tasksSelectors.selectAll);
  const activeTasks = tasks.filter((task) => !task.done);
  return <span>{t('tasks_left.tasks', { count: activeTasks.length })}</span>;
};

export default TasksLeftInfo;
