const express = require("express");
const bodyParser = require("body-parser");
const uuid = require("uuid");

let coins = require("./database.js");

const app = express();
let port = 8080;

//middleware - converts data into a json object and puts it onto the request object as a property called body
app.use(bodyParser.json());

//routes
app.get('/coins', (req, res) => {
    let query = req.query;
    let filteredCoins = coins.filter(coin => {
        let found = true;
        for(let key in query) {
            if(coin[key] != query[key]) {
                found = false;
                break
            }
        }
        return found;
    })
    res.send(filteredCoins);
});

app.post("/coins", (request, response) => {
    let newCoin = request.body;
    newCoin._id = uuid();
    coins.push(newCoin);
    response.send({
        msg: "Data added successfuly.",
        data: newCoin,
    })
})

app.delete("/coins/:id", (request, response) => {
    let { id } = request.params;
    let found = false;
    // coins = coins.filter((coin) => coin._id !== id);
    for (let i = 0; i < coins.length; i++) {
        if (coins[i]._id === id) {
            coins.splice(i, 1);
            found = true;
            break;
        }
    }
    if (found) {
        response.send({
            msg: `Item ${id} was successfully removed!`
        });
    } else {
        response.send({
            msg: `Item ${id} was NOT found!`
        })
    }

})

app.get("/coins/:id", (request, response) => {
    let { id } = request.params;
    let found = false;
    let foundCoin;
    for (let i = 0; i < coins.length; i++) {
        if(coins[i]._id === id) {
            found = true;
            foundCoin = coins[i];
            break;
        }
    }
    if (found) {
        response.send({
            msg: `Item ${id} was found!`,
            data: foundCoin
        })
    } else {
        response.send({
            msg: `Item ${id} was NOT found!`
        })
    }
})

app.put("/coins/:id", (request, response) => {
    let { id } = request.params;
    let updatedCoin = request.body;
    let found = false;
    for (let i = 0; i < coins.length; i++) {
        if (coins[i]._id === id) {
            coins[i] === Object.assign(coins[i], updatedCoin);
            updatedCoin = coins[i];
            found = true;
            break;
        }
    }
    if (found) {
        response.send({
            msg: `Item ${id} was updated!`,
            data: updatedCoin
        })
    } else {
        response.send({
            msg: `Item ${id} was NOT updated!`
        })
    }
})

app.listen(port, () => {
    console.log("Listening on port " + port);
});