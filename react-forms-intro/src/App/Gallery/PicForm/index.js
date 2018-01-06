import React, { Component } from 'react';

class PicForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                imgUrl: "",
                caption: ""
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let { value, name } = e.target;
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        })
    }
    clearInputs() {
        this.setState({
            inputs: {
                imgUrl: "",
                caption: ""
            }
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.addPic(this.state.inputs);
        this.clearInputs();
    }

    render() {
        let { imgUrl, caption } = this.state.inputs;
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} value={imgUrl} name="imgUrl" type="text" placeholder="Image URL" />
                <input onChange={this.handleChange} value={caption} name="caption" type="text" placeholder="Caption" />
                <button>Add Photo</button>
            </form>
        )
    }
}

export default PicForm;