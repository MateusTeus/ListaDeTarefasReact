import React from 'react';

function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map((item) => (
        <li key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
