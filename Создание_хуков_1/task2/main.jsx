import React from "react";
import ReactDOM from "react-dom";
import { CountdownTimer } from "./CountdownTimer";

function App(){
    return (
        <>
        <CountdownTimer/>
        </>
    );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
