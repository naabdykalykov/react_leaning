import React from "react";
import reactDom from "react-dom";
import UserCard from "./usercard";

function App(){
    return (
        <UserCard name="Nursultan" age="19"/>
    );
};

reactDom.render(<App/>, document.getElementById("root"));
