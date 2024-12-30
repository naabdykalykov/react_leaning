import React from "react";
import reactDom from "react-dom";

function LoginStatus({isLoggedIn}){
  return (
    <>
      {isLoggedIn ? (
        <h1>Добро пожаловать!</h1>
       ) : (
        <h1>Пожалуйста, войдите в систему</h1>
       )}
    </>
  );
};

function App(){
  let isLoggedIn = false;

  return (
    <>
      <LoginStatus isLoggedIn={true}/>
      <LoginStatus isLoggedIn={isLoggedIn}/>
      <LoginStatus isLoggedIn={false}/>
    </>
  );
};

reactDom.render(<App/>, document.getElementById("root"));