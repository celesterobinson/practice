const express = require("express");
let database = require("./database.js");
let logger = require("./logger.js");
let sizer = require("./sizer.js");
const bodyParser = require("body-parser");

const app = express();
let port = 8090;

app.use(logger);
app.use(sizer(database));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send({
        data: database,
        size: res.size
    });
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

