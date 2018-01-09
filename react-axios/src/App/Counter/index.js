import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super();
        this.state = {
            counter: 0
        }
        this.add = this.add.bind(this);
        this.reset = this.reset.bind(this);
    }
    shouldComponentUpdate(nexProps, nextState) {
        console.log(`previous: ${this.state.counter}\nnext:${nextState.counter}`);
        return this.state.counter !== nextState.counter;
    }
    add() {
        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1
            }
        })
    }
    reset() {
        this.setState({
            counter: 0
        })
    }
    render() {
        let { counter } = this.state;
        return (
            <div>
                <h3>{counter}</h3>
                <button onClick={this.add}>+</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}

export default Counter;