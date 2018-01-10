import React, { Component } from 'react';
import Loading from "../shared/Loading";
import Form from "../shared/Form";
import axios from "axios";

let todoUrl = "https://api.vschool.io/celesterobinson/todo/";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            loading: true
        }
        this.addTodo = this.addTodo.bind(this);
    }
    addTodo(todo) {
        axios.post(todoUrl, todo)
            .then((response) => {
                let {data} = response;
                console.log(response);
            })
            .catch((err) => {
                console.error(err);
            });
    }

    componentDidMount() {
        axios.get(todoUrl)
            .then((response) => {
                let { data } = response;
                this.setState({
                    todos: data,
                    loading: false
                })
            })
            .catch((err) => {
                console.error(err);
            })
    }

    render() {
        let { todos, loading } = this.state;
        return (
                loading ? 
                    <Loading></Loading>
                    :
                    <div>
                        <Form submit={this.addTodo} clear></Form>
                        {/* todo links will go here */}
                    </div>
        )
    }
}

export default TodoList;
