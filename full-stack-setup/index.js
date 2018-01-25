const express = require("express");
const bodyParser = require("body-parser");
const bountyRoute = require("./routes/bounty.js");
const config = require("./config");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/bounty", bountyRoute);

app.listen(config.port, ()=> {
    console.log("Listening on port " + config.port);
})