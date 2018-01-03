import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from "./Footer";
import './Footer/Footer.css';

class App extends Component {
  render() {
    let text = "write some text";
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Jungle</h1>
          <h2><i>Celeste Robinson</i></h2>
        </header>
        {/* <p className="App-intro">
          <p className = "text">{text}</p>
          I'm the coolest.
        </p> */}
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
