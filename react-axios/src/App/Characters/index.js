import React, {Component} from 'react';
import Character from "./Character";
import axios from "axios";
const swUrl = "https://swapi.co/api/people/";

//when the component mounts, make get request
//when the data comes back, set state to contain data
//display data

class Characters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: [],
            loading: true,
            err: false,
            errMsg: ""
        }
    }
    
    componentDidMount() {
        axios.get(swUrl + "as;kadjfa")
            .then((response) => {
                let {results} = response.data;
                this.setState({
                    characters: results,
                    loading: false
                })
            })
            .catch((err) => {
                this.setState({
                    loading: false,
                    errMsg: err.message,
                    err: true
                })
            })
    }

    render() {
        let {characters, loading, err, errMsg} = this.state;
        return (
            loading ?
                <div>
                    <h1>I'M LOADING GTFO</h1>
                </div> 
                :
                err ?
                <div>
                    <h1>Sorry, your data is unavailable.</h1>
                    <h1>{errMsg}</h1>
                </div>
                :
                <div>
                    {characters.map((character, i) => {
                        let {name, gender, eye_color} = character;
                        return <Character key={i} {...character}></Character>
                    })}
                </div>
        )
    }
}

export default Characters;
