var voters = [  
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

// Output will look like this:
// 18-25: n%
// 26-36: n%
// 36-55: n%

// Plan:
//1) group them by age groups
//2) group them by who voted
//3) calculate percentage of who voted out of total of that group
//4) 

var young = 0;
var mid = 0;
var old = 0;

var youngCount = 0;
var midCount = 0;
var oldCount = 0;

var ageVoteSort = function() {
    for (var i = 0; i < voters.length; i++) {
        if (voters[i].age < 26) {
            youngCount += 1;
            if (voters[i].voted === true) {
                young += 1;
            }
        } else if (voters[i].age < 36) {
            midCount += 1;
            if (voters[i].voted === true) {
                mid += 1;
            }
        } else if (voters[i].age < 56) {
            oldCount += 1;
            if (voters[i].voted === true) {
                old += 1;
            }
        }
    }
}
ageVoteSort();

console.log("18-26: " + (((young/youngCount) * 100).toFixed(0)) + "%");
console.log("26-36: " + (((mid/midCount) * 100).toFixed(0)) + "%");
console.log("36-55: " + (((old/oldCount) * 100).toFixed(0)) + "%");