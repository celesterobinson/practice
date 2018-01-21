import React from 'react';
import { connect } from "react-redux";
import { removeRecipe } from "../../../redux/recipes"
import Form from "../../shared/Form";

function Recipe(props) {
    let { index, name, category, cookTime, removeRecipe } = props;
    return (
        <div>
            <h3>{name}</h3>
            <p>Type: {category}</p>
            <p>Cook Time: {cookTime}</p>
            <button onClick={() => removeRecipe(index)}>X</button>
            <Form edit {...props}></Form>
        </div>
    )
}

export default connect(null, {removeRecipe})(Recipe);
