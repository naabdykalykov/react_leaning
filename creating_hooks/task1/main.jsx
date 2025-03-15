import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
const ClickCounter = () => {
  const [count, setCount] = useState(0);

  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    const newClicks = clicks + 1;
    setClicks(newClicks);

    if (newClicks % 2 === 0) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div>
      <h1>Счётчик: {count}</h1>
      <p>Количество нажатий: {clicks}</p>
      <button onClick={handleClick}>Нажми меня</button>
    </div>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClickCounter />
  </StrictMode>
);
