// TaskList.js

import React from 'react';
import { FaTrash } from 'react-icons/fa';

function TaskList({ tasks, toggleTaskStatus, deleteTask }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTaskStatus(index)}
          />
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.text}
          </span>
          <button onClick={() => deleteTask(index)}>
            <FaTrash />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
