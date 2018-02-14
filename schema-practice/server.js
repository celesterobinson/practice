const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

mongoose.connect("mongodb://localhost/instruments", (err) => {
    if(err) throw err;
    console.log("Connected to the database");
});

app.use(bodyParser.json());
app.use("/instruments", require("./routes/instruments"));

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});