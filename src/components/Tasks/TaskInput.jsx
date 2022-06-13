import React, { useState } from 'react';
import _ from 'lodash';
import { Form, FloatingLabel } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { addTask } from '../../slices/tasksSlice.js';

const TaskInput = () => {
  const [text, setText] = useState('');
  const [isValid, setIsValid] = useState(true);
  const onChangeInput = (e) => setText(e.target.value);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const submitHandler = (e) => {
    e.preventDefault();
    if (text === '') {
      setIsValid(false);
      return;
    }
    setIsValid(true);
    const newTask = { text, done: false, id: _.uniqueId() };
    dispatch(addTask(newTask));
    setText('');
  };

  return (
    <div className="p-5 pb-1">
      <Form onSubmit={submitHandler}>
        <FloatingLabel
          controlId="taskText"
          label={t('task_input.label')}
          className="mb-3"
        >
          <Form.Control
            className={cn('shadow-sm', !isValid && 'is-invalid')}
            type="text"
            placeholder={t('task_input.placeholder')}
            autoComplete="off"
            autoFocus
            value={text}
            onChange={onChangeInput}
          />
          <Form.Control.Feedback type="invalid" tooltip>
            {!isValid && t('errors.empty_field')}
          </Form.Control.Feedback>
        </FloatingLabel>
      </Form>
    </div>
  );
};

export default TaskInput;
