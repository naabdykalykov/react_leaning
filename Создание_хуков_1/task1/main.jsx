import React from "react";
import Counter from "./counter";
import reactDom from "react-dom";

const App = () => {
return (
    <div>
        <Counter />
    </div>
    );
}

reactDom.render(<App/>, document.getElementById("root"));