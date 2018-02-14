import React, { Component } from "react";
import { connect } from "react-redux";
import { addRecipe, editRecipe } from "../../redux/recipes";

class Form extends Component {
    constructor(props) {
        super(props);
        let {name, category, cookTime} = props;
        this.state = {
            inputs: {
                name: name || "",
                category: category || "",
                cookTime: cookTime || ""
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let { name, value } = e.target;
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        let { editRecipe, addRecipe, add, index } = this.props;
        if (add) {
            addRecipe(this.state.inputs);
        } else {
            editRecipe(this.state.inputs, index);
        }
        if (this.props.clear) {
            this.clearInputs();
        }
    }
    clearInputs() {
        this.setState({
            inputs: {
                name: "",
                category: "",
                cookTime: ""
            }
        })
    }
    render() {
        let { name, category, cookTime } = this.state.inputs;
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} type="text" name="name" value={name} placeholder="NAME" />
                <input onChange={this.handleChange} type="text" name="category" value={category} placeholder="CATEGORY" />
                <input onChange={this.handleChange} type="text" name="cookTime" value={cookTime} placeholder="COOK TIME" /><br/>
                <button>Submit</button>
            </form>
        )
    }
}

export default connect(null, { addRecipe, editRecipe })(Form);