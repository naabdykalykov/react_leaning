import React from "react";
import reactDom from "react-dom";

function Button(){

  const buttonStyle = {
    backgroundColor: 'green', 
    border: 'none', 
    color: 'white', 
    padding: '15px 32px', 
    textAlign: 'center', 
    textDecoration: 'none', 
    display: 'inline-block',
    fontSize: '16px', 
    margin: '4px 2px', 
    cursor: 'pointer', 
    borderRadius: '4px',
    transition: 'background-color 0.3s',
  };

  const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: 'black',
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <button style={isHovered ? buttonHoverStyle : buttonStyle}
     onMouseEnter={()=> setIsHovered(true)}
     onMouseLeave={()=> setIsHovered(false)}
    >
      Нажми сюда!
    </button>
  );
};

function App() {
  return (
    <>
      <Button />
    </>
  );
};

reactDom.render(<App />, document.getElementById("root"));