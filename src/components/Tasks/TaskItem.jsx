import React from 'react';
import { Form } from 'react-bootstrap';

const TaskItem = ({ task, onCheckTask }) => (
  <div className="border rounded shadow-sm p-2 mb-1 text-break hover-shadow">
    <Form.Check id={task.id}>
      <Form.Check.Input type="checkbox" onChange={onCheckTask} checked={task.done} />
      <Form.Check.Label>
        {
          task.done
            ? <p className="mb-0"><s>{task.text}</s></p>
            : <p className="mb-0">{task.text}</p>
        }
      </Form.Check.Label>
    </Form.Check>
  </div>
);
export default TaskItem;
