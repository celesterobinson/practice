import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Service from "../pages/Service"
import Navbar from "./Navbar";
import Header from "./Header";


function App(props) {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route path="/services" component={Services} />
            </Switch>
        </div>
    )
}

export default App;