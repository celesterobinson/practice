import React, { Component } from 'react';
import Counter from "./Counter";
import Characters from "./Characters";

class App extends Component {
    render() {
        return (
            <div>
                <Counter></Counter>
                <Characters></Characters>
            </div>
        )
    }
}

export default App;
