function multiply(x, y) {
    if(typeof x !== "number" || typeof y !== "number") {
        throw "Invalid input";
    }
    return x * y;
}

module.exports = multiply;

