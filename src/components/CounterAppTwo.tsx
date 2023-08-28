import React, { useState } from "react";
import "../index.scss";
const Counter = () => {
  const [count, setCount] = useState(1);

  return (
    <div className="bg-orange-300">
      <div>
        Add by one each asdasd click <strong>APP-2</strong>
      </div>
      <div>Your click count : {count} </div>
      <button onClick={() => setCount((prevState) => prevState * 2)}>
        Click me
      </button>
    </div>
  );
};

export default Counter;
