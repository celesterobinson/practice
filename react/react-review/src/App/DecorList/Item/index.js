import React from "react";

function Item(props) {
    let { type, color, size } = props;
    return (
        <div className="item">
            <h1>Item: {type}</h1>
            <h2>Color: {color}</h2>
            <h3>Size: {size}</h3>
        </div>
    )
}

export default Item;