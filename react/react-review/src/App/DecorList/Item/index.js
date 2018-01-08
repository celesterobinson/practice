import React from "react";
import EditForm from "./EditForm"

function Item(props) {
    let { type, color, size, deleteItem, i, editItem, index } = props;
    return (
        <div className="item">
            <h1>{type}</h1>
            <h2>{color}</h2>
            <h3>{size}</h3>
            <button onClick={() => deleteItem(i)}>X</button>
            <EditForm {...props}></EditForm>
        </div>
    )
}

export default Item;