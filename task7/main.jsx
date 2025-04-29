import React, { StrictMode, useReducer } from "react";
import { createRoot } from "react-dom/client";

const visibilityReducer = (state, action) => {
  switch (action.type) {
    case "tab1":
      return "tab1";
    case "tab2":
      return "tab2";
    case "tab3":
      return "tab3";
    default:
      return state;
  }
};

export const VisibilityToggle = () => {
  const [activeTab, dispatch] = useReducer(visibilityReducer, {
    visible: false,
  });
  return (
    <div>
      <button onClick={() => dispatch({ type: "tab1" })}>Вкладка 1</button>
      <button onClick={() => dispatch({ type: "tab2" })}>Вкладка 2</button>
      <button onClick={() => dispatch({ type: "tab3" })}>Вкладка 3</button>

      {activeTab === "tab1" && <p>Содержимое вкладки 1</p>}
      {activeTab === "tab2" && <p>Содержимое вкладки 2</p>}
      {activeTab === "tab3" && <p>Содержимое вкладки 3</p>}
    </div>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <VisibilityToggle />
  </StrictMode>
);
