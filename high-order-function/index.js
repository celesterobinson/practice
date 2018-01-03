let database = [
    {name: "Ben"},
    {name: "Celeste"},
    {name: "Luke"},
    {name: "Matthew"},
    {name: "Ken"},
];

//filter, forEach, map

database.forEach(function(person, i) {
    console.log(i + ": " + person.name)
})