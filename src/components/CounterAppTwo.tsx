import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import "../index.scss";
const Counter = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const channel = new BroadcastChannel("counterChannel");

    // Listener for incoming messages
    channel.onmessage = (event) => {
      if (event.data.from === "APP1") {
        setCount(event.data.value * 2);
      }
    };

    // Cleanup
    return () => {
      channel.close();
    };
  }, []);

  const handleClick = () => {
    const newCount = count * 2;
    setCount(newCount);

    // Broadcast the new count value
    const channel = new BroadcastChannel("counterChannel");
    channel.postMessage({ from: "APP2", value: newCount });
    channel.close();
  };
  return (
    <div className="flex h-full items-center justify-center bg-[#FCF3DBFF] text-center font-[bold] text-lg">
      <div className="flex flex-col">
        <div>Your click count : {count} </div>
        <button onClick={handleClick}>Click me</button>
      </div>
      <img src={logo.toString()} width={100} height={100} alt="Example SVG" />
    </div>
  );
};

export default Counter;
