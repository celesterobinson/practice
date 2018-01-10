import React, {Component} from "react";

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                username: "",
                password: ""
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        let {name, value} = event.target;
        this.setState((prevState) => {
            return {
                inputs:{
                    ...prevState.inputs,
                    [name]: value
                }
            }
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        let {username} = this.state.inputs;
        alert(`Welcome to my useless app, ${username}!!`);
    }

    render(){
        console.log(this.state.inputs);
        let {username, password} = this.state.inputs;
        return(
            <form onSubmit={this.handleSubmit}>
                <h3>Signup for my useless app!</h3>
                <input onChange={this.handleChange} value={username} name="username" type="text" placeholder="username"/>
                <input onChange={this.handleChange}  value={password} name="password" type="password" placeholder="password"/>
                <button>Submit</button>
            </form>
        )
    }
}

export default SignupForm;