import React from 'react';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { removeCompletedTasks } from '../../slices/tasksSlice.js';

const ClearCompletedBtn = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const clearCompletedHandler = () => dispatch(removeCompletedTasks());
  return (
    <Button variant="light text-secondary p-0" onClick={clearCompletedHandler}>
      <span className="small">{t('buttons.clear_completed')}</span>
    </Button>
  );
};

export default ClearCompletedBtn;
