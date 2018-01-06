import React, {Component} from "react";
import SignupForm from "./SignupForm";
import Gallery from "./Gallery";

function App(props) {
    return (
        <div>
            <header>
                <h1>Title of Stuff</h1>
            </header>
            <SignupForm></SignupForm>
            <footer>
                <p>&copy;2018</p>
            </footer>
        </div>
    )
}

export default App;