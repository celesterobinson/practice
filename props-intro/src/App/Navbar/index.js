import React, { Component } from 'react';

function Navbar(props) {
    return (
        <div className="Nav" style={props.backgroundColor}>
            {props.links.map((link) => {
                return <a style={props.color} 6y7href={link.href}>{link.name}</a>
            })}
        </div>
    )
}

export default Navbar;

