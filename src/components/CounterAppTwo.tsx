import React, { useState } from "react";
import logo from "../assets/logo.svg";
import "../index.scss";
const Counter = () => {
  const [count, setCount] = useState(1);

  return (
    <div className="flex h-full items-center justify-center bg-[#FCF3DBFF] text-center font-[bold] text-lg">
      <div className="flex flex-col">
        <div>Your click count : {count} </div>
        <button onClick={() => setCount((prevState) => prevState * 2)}>
          Click me
        </button>
      </div>
      <img src={logo.toString()} width={100} height={100} alt="Example SVG" />
    </div>
  );
};

export default Counter;
