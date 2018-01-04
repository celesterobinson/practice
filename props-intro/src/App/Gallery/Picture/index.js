import React, {Component} from "react";
import "./index.css";
import Prop

function Picture(props) {
    let parentStyles = {
        backgroundImage: `url(${props.backgroundUrl})`
    }
    return (
        <div style={parentStyles}>
            <h5>{props.caption}</h5>
            <p>{props.author}</p>
        </div>
    )
}

export default Picture;