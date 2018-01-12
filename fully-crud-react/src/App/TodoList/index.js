import React, { Component } from 'react';
import Loading from "../shared/Loading";
import Form from "../shared/Form";
import TodoItem from "./TodoItem";

import "./TodoList.css";

import { Link } from "react-router-dom";
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
                let { data } = response;
                this.setState((prevState) => {
                    let newTodos = [...prevState.todos, data]
                    return {
                        todos: newTodos
                    }
                })
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
                this.setState({
                    todos: [],
                    loading: false
                })
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
                    <div className="list">
                        {todos.map((todo) => {
                            let { title, _id } = todo;
                            return <Link to={`/todos/${_id}`} key={_id}>{title}</Link>
                        })}
                    </div>
                </div>
        )
    }
}

export default TodoList;
