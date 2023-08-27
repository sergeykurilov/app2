import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);

  return (
    <div>
      <div>
        Add by one each click <strong>APP-2</strong>
      </div>
      <div>Your click count : {count} </div>
      <button onClick={() => setCount((prevState) => prevState * 2)}>
        Click me
      </button>
    </div>
  );
};

export default Counter;
