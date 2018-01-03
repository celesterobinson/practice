import React, { Component } from "react";
import "./index.css";
import Header from "./Header";
import "./Header/header.css"
import Content from "./Content";
import Footer from "./Footer";

function App(props) {
    return (
        <div className = "app-wrapper">
            <Header></Header>
            <Content></Content>
            <Footer></Footer>
        </div>
    )
}

export default App;