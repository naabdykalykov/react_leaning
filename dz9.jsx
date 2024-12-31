import React from "react";
import reactDom from "react-dom";


function ColoredText({color}){
  return (
      <p style={{color: color}}>
        Этот текст будет {color} цвета!
      </p>
  );
};

function App(){
  return (
    <>  
      <ColoredText color="blue" />
      <ColoredText color="red" />
      <ColoredText color="green" />
    </>
  );
};
reactDom.render(<App/>, document.getElementById("root"));