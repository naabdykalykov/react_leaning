import React from "react";
import reactDom from "react-dom";

function SimpleList({items}){
  return (
    <>
      <ul>
        {items.map((item, index) => (<li key={index}>{item}</li>))}
      </ul>
    </>
  );
};

function App(){
  return (
    <SimpleList items={['Apple', 'Banana', 'Cherry']} />
  );
};

reactDom.render(<App/>, document.getElementById("root"));