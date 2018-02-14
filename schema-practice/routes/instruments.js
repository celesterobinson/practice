const express = require("express");
const instrumentRoutes = express.Router();
const Instruments = require("../models/instruments");

instrumentRoutes.get("/", (req, res) => {
    Instruments.find((err, instruments) => {
        if (err) return res.status(500).send(err);
        return res.send(instruments);
    })
});

instrumentRoutes.post("/", (req, res) => {
    const newInstrument = new Instruments(req.body);
    newInstrument.save((err) => {
        if (err) return res.status(500).send(err);
        return res.send(newInstrument);
    })
});

instrumentRoutes.get("/:id", (req, res) => {
    Instruments.findById(req.params.id, (err, instruments)=> {
        if (err) return res.status(500).send(err);
        return res.send(instruments);
    })
});

instrumentRoutes.put("/:id", (req, res) => {
    Instruments.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedInstrument)=>{
        if(err) return res.status(500).send(err);
        return res.send(updatedInstrument);
    })
});

instrumentRoutes.delete("/:id", (req, res) => {
    Instruments.findByIdAndRemove(req.params.id, (err, deletedFood)=> {
        if (err) return res.status(500).send(err);
        return res.send(deletedFood);
    })
});

module.exports = instrumentRoutes