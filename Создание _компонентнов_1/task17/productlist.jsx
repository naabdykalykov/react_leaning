import React from "react";

function ProductList({ products }) {
    return (
        <ul>
            {products.map((item) => (
                <li key={item.id}>
                    Название: {item.name}. Цена: {item.price} рубля.
                </li>
            ))}
        </ul>
    );
}

export default ProductList;