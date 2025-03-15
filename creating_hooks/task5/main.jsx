import React, { StrictMode, useState, useEffect, useReducer } from "react";
import { createRoot } from "react-dom/client";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: Math.max(state.count - 1, 0) };
    case "reset":
      return { count: 0 };
    default:
      throw new Error("Неизвестное действие");
  }
};

const ProductCounter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Количество товаров: {state.count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>Увеличить</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Уменьшить</button>
      <button onClick={() => dispatch({ type: "reset" })}>Сбросить</button>
    </div>
  );
};

// eslint-disable-next-line no-undef
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductCounter />
  </StrictMode>
);
