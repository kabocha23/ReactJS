// es5 function
const square = function (x) {
    return x * x;
};

console.log(square(8));

// es6 arrow function

const squareArrow = (x) => {
    return x * x;
};

console.log(squareArrow(8));

// es6 arrow function with expression syntax
const squareArrow2 = (x) => x * x;

console.log(squareArrow2(8));

// Challenge - Use arrow functions
// getFirstName('Mike Smith') => 'Mike'
// Create regular arrow function
// Create arrow function using shorthand syntax

const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
}
console.log(getFirstName(fullName));

const getFirstName2 = (fullName) => fullName.split(' ')[0];
console.log(getFirstName2(fullName));

// this keyword - no longer bound

const user = {
    name: 'Jason',
    cities: ['San Francisco', 'New York', 'Boston'],
    printPlacesLived: function () {
        console.log(this.name);
        console.log(this.cities);
        // this can be accessed because it is bound to the object

        this.cities.forEach(function (city) {
            console.log(this.name + ' has lived in ' + city);
            // this will throw an error because anonymous function cannot use "this"
            // a workaround would be setting a new const to "this" within the printPlacesLived function
        });
    }
};
user.printPlacesLived();

const user = {
    name: 'Jason',
    cities: ['San Francisco', 'New York', 'Boston'],
    printPlacesLived() {
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
            // changing anonymous function to an arrow function fixes this
        });
    }
};
user.printPlacesLived();

const user = {
    name: 'Jason',
    cities: ['San Francisco', 'New York', 'Boston'],
    printPlacesLived() {
        // map lets us take an array, transform each item, and return an array with the transformed items, without affecting the original array
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(user.printPlacesLived());

//Challenge area

const multiplier = {
    numbers: [1, 2, 3, 4, 5],
    multiplyBy: 7,
    multiply () {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());