import React from "react";
import reactDom from "react-dom";


function UserProfile({name, age}){
  return (
    <h1>Привет! Меня зовут {name} и мне {age} лет</h1>
  );
};

function App() {
  return (
    <div>
      <UserProfile name="Nursultan" age="19"/>
      <UserProfile name="Alex" age="18"/>
      <UserProfile name="Max" age="21"/>
    </div>
  );
};

reactDom.render(<App/>, document.getElementById("root"));