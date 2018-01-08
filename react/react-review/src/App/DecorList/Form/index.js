import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                size: props.size || "",
                color: props.color || "",
                type: props.type || ""
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        let { name, value } = event.target;
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.submit(this.state.inputs, this.props.index);
        this.clearInputs();
    }

    clearInputs() {
        this.setState({
            inputs: {
                size: "",
                color: "",
                type: ""
            }
        })
    }

    render() {
        let { size, color, type } = this.state.inputs;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="size">
                        Pick a size:
                        <select onChange={this.handleChange} name="size" value={size}>
                            <option value="sm">Small</option>
                            <option value="md">Medium</option>
                            <option value="lg">Large</option>
                            <option value="xl">Extra Large</option>
                        </select>
                    </label>
                    <input onChange={this.handleChange} value={color} name="color" type="text" placeholder="Color" />
                    <input onChange={this.handleChange} value={type} name="type" type="text" placeholder="type" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form;