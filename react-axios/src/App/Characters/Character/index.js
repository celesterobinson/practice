import React, { Component } from 'react'

function Character(props) {
    let {name, gender, eye_color} = props
    return (
        <div>
            <h1>{name}</h1>
            <h2>{gender}</h2>
            <h3>{eye_color}</h3>
        </div>
    )
}

export default Character;


