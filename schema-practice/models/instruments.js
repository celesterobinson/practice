const mongoose = require("mongoose");

const instrumentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    price: Number,
    specs: {
        color: String,
        key: String,
        parts: Number
    },
    isAvailable: Boolean,
    comesWithCase: Boolean
});

module.exports = mongoose.model("Instruments", instrumentSchema);