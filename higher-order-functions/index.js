// let errandBoy = function(errand) {
//     errand();
//     console.log("I did the thing you wanted me to do! NOW PAY ME!");
// }

// function goShopping() {
//     console.log("I bought some stuff");
// }

// function pickupDrycleaning() {
//     console.log("I got the stuff");
// }

// function cleanToiletAtMySummerHome() {
//     console.log("I did that nasty thing you wanted");
// }

// function fetchAndMakeCoffee() {
//     console.log("Here's your coffee. Great");
// }

// // errandBoy(goShopping);

// function chauncey(command) {
//     switch(command) {
//         case "I need a new doghouse":
//             return goShopping;
//         case "I need my suit pressed":
//             return pickupDrycleaning;
//         case "I want to visit my summer home":
//             return cleanToiletAtMySummerHome;
//         case "I'm tired and grumpy":
//             return fetchAndMakeCoffee;
//     }
// }

// let thingAnnoyingMeToday = "I want to visit my summer home";
// let newErrand = chauncey(thingAnnoyingMeToday);
// errandBoy(newErrand);

// let colors = ["blue", "red", "green"];

// colors.filter();

// function calculator(x, y, operation) {
//     return operation(x, y);
// }

// function multiply(x, y) {
//     return x * y;
// }

// console.log(calculator(2, 5, multiply));

function filter(arr, testFunc) {
    let output = [];
    for(let i = 0; i < arr.length; i++) {
        if(testFunc(arr[i], i)) {
            output.push(arr[i]);
        }
    }
    return output;
}

function checkAge(age) {
    return age >= 18;
}

function checkNameLength(name) {
    return name.length <= 5;
}

function oddIndex(item, i) {
    return i % 2 !== 0;
}
let ages = [10, 12, 14, 3, 18, 21, 30, 105];
let over18 = filter(ages, checkAge);

let contacts = ["Ben", "Michelle", "Brayan", "Matthew", "Erica", "John", "Sam", "Amy"];
let contactsWithShortNames = filter(contacts, checkNameLength);

let indexes = [0, 78326, 2, "squash", 4, false, 6, {}, 8, [], 10];
let oddNumberedIndexes = filter(indexes, oddIndex);

console.log(oddNumberedIndexes);