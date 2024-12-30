import React from "react";
import reactDom from "react-dom";


function Greeting({name}){
  return(
    <h1>Hello, {name}</h1>
  );
}

function App() {
  return (
    <div>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
      <Greeting name="Charlie" />
    </div>
  );
}
reactDom.render(<App/>, document.getElementById("root"));
