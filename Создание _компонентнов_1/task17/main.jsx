import React from "react";
import reactDom from "react-dom";
import ProductList from "./productlist";

function App(){
    return (
        <ProductList products={[
            { id: 1, name: 'Apple', price: 1.5 },
            { id: 2, name: 'Orange', price: 1.2 },
          ]} />
    );
};

reactDom.render(<App/>, document.getElementById("root"));