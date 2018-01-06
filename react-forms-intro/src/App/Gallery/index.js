import React, { Component } from "react";
import PicForm from "./PicForm";

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pictures:[]
        }
        this.addPic = this.addPic.bind(this);
    }
    addPic(pictureObject) {
        this.setState((prevState) => {
            return {
                pictures: [pic,...prevState.pictures]
            }
        })
    }
    render() {
        console.log(this.state.pictures);
        return (
            <div>
                <PicForm addPic={this.addPic}></PicForm>
                {/* map through pictures here */}
            </div>
        )
    }
}

export default Gallery;
