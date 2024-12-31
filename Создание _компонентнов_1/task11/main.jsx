import React from "react";
import reactDom from "react-dom";

import Header from "./header";
import {Footer} from "./footer";

function App(){
    return (
        <>
            <Header/>
            <p>Тут должен быть рыба-текст?</p>
            <Footer/>
        </>
    );
};

reactDom.render(<App/>, document.getElementById("root"));