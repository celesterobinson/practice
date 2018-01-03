let database = [
    {
        name: "Zebra",
        age: 98
    },
    {
        name: "Ben",
        age: 29
    },
    {
        name: "Celeste",
        age: 25
    },
    {
        name: "Luke",
        age: 33
    },
    {
        name: "Matthew",
        age: 25
    },
    {
        name: "Ken",
        age: 45
    },
];

//filter, forEach, map

let alphabetizedDatabase = database.sort(function(person1, person2){
    if(person1.age < person2.age) {
        return -1;
    } else if(person1.age > person2.age) {
        return 1;
    } else {
        return 0;
    }
});

let ages = alphabetizedDatabase.map(function(person) {
    return person.age;
})


// let sum = numbers.reduce(function(total, currVal) {
//     return total + currVal;
// }, 0)

let avg = ages.reduce(function(total, num) {
    return total + num;
}) / ages.length;

console.log(avg);



