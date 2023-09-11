import React, { useState } from "react";

const LikeButton = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Like it</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default LikeButton;
