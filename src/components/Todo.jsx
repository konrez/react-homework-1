import React, { useState } from "react";

const Todo = ({ taskName }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleCheckbox = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <div>
      <input type="checkbox" checked={isCompleted} onChange={handleCheckbox} />
      <span style={{ textDecoration: isCompleted ? "line-through" : "none" }}>
        {taskName}
      </span>
    </div>
  );
};

export default Todo;
