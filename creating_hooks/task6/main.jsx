import React, { StrictMode, useReducer } from "react";
import { createRoot } from "react-dom/client";

const visibilityReducer = (state, action) => {
  switch (action.type) {
    case "show":
      return { visible: true };
    case "hide":
      return { visible: false };
    default:
      return state;
  }
};

export const VisibilityToggle = () => {
  const [state, dispatch] = useReducer(visibilityReducer, { visible: false });
  return (
    <div>
      <button onClick={() => dispatch({ type: "show" })}>Показать</button>
      <button onClick={() => dispatch({ type: "hide" })}>Скрыть</button>
      {state.visible && <p>Текст показан!</p>}
    </div>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <VisibilityToggle />
  </StrictMode>
);
