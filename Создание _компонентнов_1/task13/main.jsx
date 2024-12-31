import React from "react";
import ReactDom from "react-dom";
import Greeting from "./greeting";

function App(){
    return (
        <>
            <Greeting name="Nursultan"/>
            <Greeting name="Beksultan"/>
            <Greeting name="Nurbek"/>
            <Greeting name="Beknur"/>
        </>
    );
};

ReactDom.render(<App/>, document.getElementById("root"));