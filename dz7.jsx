import React from "react";
import reactDom from "react-dom";


function TaskList({tasks}){
  return (
    <ul>
      {tasks.map(item => <li key={item}>{item}</li>)}
    </ul>
  );
};

function App() {
  const tasks = ["Learn JSX", "Build a React app", "Explore hooks"];
  return <TaskList tasks={tasks}/>
};

reactDom.render(<App/>, document.getElementById("root"));