import React, { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

const CountdownTimer = () => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    if (count <= 0) return;

    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
};

export default CountdownTimer;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CountdownTimer />
  </StrictMode>
);
