import React from 'react'
import TodoList from "./TodoList";

function App(props) {
    return (
        <div>
            <h1>My Todos</h1>
            <TodoList></TodoList>
            <footer>&copy; 2018</footer>
        </div>
    )
}

export default App
