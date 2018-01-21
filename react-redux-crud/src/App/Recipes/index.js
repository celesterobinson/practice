import React from 'react';
import Recipe from "./Recipe";
import { connect } from "react-redux";

function Recipes(props) {
    let { recipes } = props;
    let recipeComponent = recipes.map((recipe, i) => {
        return <Recipe key={i + recipe.name} {...recipe} index={i}></Recipe>
    })
    return (
        <div>
            {recipeComponent}
        </div>
    )
}
const mapStateToProps = (state) => {
    return { recipes: state.recipes }
}

export default connect(mapStateToProps, {})(Recipes);
