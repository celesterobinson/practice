function InputError() {
    Error.call(this);
    this.type = "Input Error";
    this.message = "Input must be a number";
}

function add(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
        throw new InputError();
    }
    return x + y;
}

try {
    console.log(add(2, "5"))
} catch(err) {
    console.log(err.message);
}



    