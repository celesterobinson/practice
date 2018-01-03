let database = [
    {
        name: "Zebra",
        age: 29
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

alphabetizedDatabase.forEach(function(person) {
    console.log(person.age);
})