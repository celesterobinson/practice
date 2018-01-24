const express = require("express");
const bodyParser = require("body-parser");

const rickAndMorty = require("./rickAndMorty");

const app = express();
let port = 8000;

app.use(bodyParser.json());

app.get("/rickAndMorty", (req, res) => {
    res.send(rickAndMorty);
});

app.post("/rickAndMorty", (req, res) => {
    rickAndMorty.push(req.body);
    res.send({
        msg: "Data added successfully.",
        data: req.body
    })
});

app.listen(port, () => {
    console.log("Listening on Port " + port);
});