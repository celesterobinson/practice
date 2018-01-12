import React, { Component } from 'react';
import Form from "../../shared/Form";
import Loading from "../../shared/Loading";
import axios from "axios";
let todoItemUrl = "https://api.vschool.io/celesterobinson/todo/";



class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: {},
            loading: true
        }
        this.removeItem = this.removeItem.bind(this);
        this.toggleDisplay = this.toggleDisplay.bind(this);
        this.editTodo = this.editTodo.bind(this);
    }
    componentDidMount() {
        let { id } = this.props.match.params;
        axios.get(todoItemUrl + id)
            .then((response) => {
                let { data } = response;
                this.setState({
                    todo: data,
                    loading: false
                })
            })
            .catch((err) => {
                console.error(err);
            })
    }
    removeItem() {
        let { id } = this.props.match.params;
        let { history } = this.props;
        axios.delete(todoItemUrl + id)
            .then((response) => {
                alert(`Item ${id} was successfully removed!`);
                history.push('/');
            })
            .catch((err) => {
                console.log(err);
                history.push('/');
            })
    }
    toggleDisplay() {
        this.setState((prevState) => {
            return {
                displayForm: !prevState.displayForm
            }
        })
    }
    editTodo(todo) {
        let { id } = this.props.match.params;
        axios.put(todoItemUrl + id, todo)
            .then((response)=>{
                let {data} = response;
                this.setState({
                    todo: data,
                    displayForm: false
                });
            })
            .catch((err)=> {
                console.error(err);
            })
    }
    render() {
        let { todo, loading, displayForm } = this.state;
        let { title, description, price, completed, imgUrl } = todo;
        let style = { backgroundImage: `url(${imgUrl})` }
        let formStyle = { display: displayForm ? "initial" : "none" }
        return (
            loading ?
                <Loading></Loading>
                :
                <div style={style}>
                    <h1>{title}</h1>
                    <h2>Price: ${price}</h2>
                    <p>Completed: {completed ? "Yess" : "No"}</p>
                    <p>{description}</p>
                    <button onClick={this.removeItem}>X</button>
                    <button onClick={this.toggleDisplay}>Edit</button>
                    <div style={formStyle}>
                        <Form {...todo} submit={this.editTodo} clear></Form>
                    </div>
                </div>
        )
    }
}

export default TodoItem;
