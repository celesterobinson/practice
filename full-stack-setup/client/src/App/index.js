import React, { Component } from 'react'
import axios from "axios";

class App extends Component {
    componentDidMount() {
        axios.get("http://localhost:8001/bounty")
            .then((response)=> {
                console.log(response.data);
            })
    }
    render() {
        return (
            <div>
                test
            </div>
        )
    }
}

export default App;
