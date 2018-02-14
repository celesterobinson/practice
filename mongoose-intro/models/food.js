const mongoose = require("mongoose");

//creating a schema
const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    healthInfo: {  //When using an object inside of a schema, it is called a sub-document.
        calories: Number,
        satFats: Number,
        isOrganic: Boolean
    },
    isVegan: {
        type: Boolean,
        default: false
    },
    ingredients: [String]
});

module.exports = mongoose.model("Food", foodSchema);
