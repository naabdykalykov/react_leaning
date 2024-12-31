import React from "react";
import reactDom from "react-dom";

function UserInfo({isAdmin}){
  return (
    <>
      {isAdmin ? (
        <h1>Администратор</h1>
      ) : (
        <h1>Обычный пользователь</h1>
      )}
    </>
  );
};

function App(){
  return (
    <div>
      <UserInfo isAdmin={true}/>
      <UserInfo isAdmin={false}/>
    </div>
  );
};

reactDom.render(<App/>, document.getElementById("root"));