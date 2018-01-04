import React, {Component} from "react";

function Gallery(props) {

    let picData = [
        {
            caption: "OMFG SO CUUUUUTE",
            author: "Mr. Catt",
            backgroundUrl: "https://www.stuff.com"
        },
        {
            caption: "OMFG SO CUUUUUTE",
            author: "Mr. Catt",
            backgroundUrl: "https://www.stuff.com"
        },
        {
            caption: "OMFG SO CUUUUUTE",
            author: "Mr. Catt",
            backgroundUrl: "https://www.stuff.com"
        }
    ]
    return (
        <section className="gallery-wrapper">
            {picData.map((picInfo) => {
                return <Picture {...picInfo}></Picture>
            })}
        </section>
    )
}

export default Gallery;