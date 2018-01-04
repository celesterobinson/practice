import React, { Component } from "react";
import Navbar from "./Navbar";
import Gallery from "./Gallery";
import Div from "./Div";

function App(props) {
    let links = [{
        href: "/home",
        name: "Home"
    }, {
        href: "/about",
        name: "About"
    }, {
        href: "/contact",
        name: "Contact"
    }];
    return (

        <div className="app-wrapper">
            <h1>Welcome to {props.name}</h1>
            <h2>Founded by {props.founder}</h2>
            <Navbar links={links} backgroundColor={{backgroundColor: "blue"}} color={{color: "white"}}></Navbar>
            <Gallery></Gallery>
        </div>  
    )
}

export default App;