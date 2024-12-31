import React from "react";
import reactDom from "react-dom";


function Article({title, content}){
  return (
    <>
        <h1>{title}</h1>
        <p>{content}</p>
    </>
  );
};

function App() {
  return (
    <div>
      <Article title="JSX Overview" content="JSX is a syntax extension for JavaScript." />
      <Article title="React Components" content="React components let you split the UI into independent parts." />
    </div>
  );
};

reactDom.render(<App/>, document.getElementById("root"));