console.log("*********************************");
console.log("*********** functions ***********");
console.log("*********************************");


var none = () => { };
console.log(none.prototype); // undefined because arrow functions do not have a prototype property.

(() => 'IIFE')();
// Returns "IIFE"
// (this is an Immediately Invoked Function Expression)

// function in ES5
var ES5example = function (x, y) {
    return x * y;
};




// arrow function in ES6
const ES6example = (x, y) => { return x * y };


//.map function
const originalArray = [5, 10, 15, 20, 25];

function plusFive(number) {
    return number + 5;
}

const newArray = originalArray.map(plusFive);

console.log(originalArray);   // [5, 10, 15, 20, 25]
console.log(newArray);        // [10, 15, 20, 25, 30]

// for each 

var list = ["apple", "banana", "cashew"];
list.forEach(function (entry) {
    console.log(entry);
});


// filter

var list = ['apple', 'banana', 'cashew', 'flour', 'strawberry', 'salt'];

const result = list.filter(list => list.length > 6);

console.log(result);

// class syntax inheritance

class City {

    constructor(name, population) {
        this.name = name;
        this.population = population;
    }

    getName() {
        return this.name;
    }

    getPopulation() {
        return this.population;
    }

}
class District extends City {

    constructor(name) {
        super(name, 'district');
    }

    getName() {
        return 'This district is : ' + super.getName();
    }

}
let district = new District('Kallio');
console.log(district.getName()); // This district is Kallio
console.log(district.getPopulation()); // district

//template literals and placeholders

let myName = "Lana";
let hello = ` My name is ${myName}.`
console.log(hello); // My name is Lana.

// spread operator

const list1 = [1, 2];
const list2 = [...list1, 3, 4];
console.log(list2);

// trailing commas
var list = [
    5,
    7,
    9,
];

console.log(list); // [5, 7, 9,]
console.log(list.length); // 3

var list = [5, 7, 9, , , ,];
console.log(list.length); // 6


