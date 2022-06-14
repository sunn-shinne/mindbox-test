import React from 'react';
import { Form } from 'react-bootstrap';

const TaskItem = ({ task, onCheckTask }) => (
  <div className="border rounded shadow-sm p-2 mb-1 text-break hover-shadow">
    <Form.Check id={task.id}>
      <Form.Check.Input type="checkbox" onChange={onCheckTask} checked={task.done} />
      <Form.Check.Label>
        {
          task.done
            ? <s>{task.text}</s>
            : task.text
        }
      </Form.Check.Label>
    </Form.Check>
  </div>
);
export default TaskItem;
