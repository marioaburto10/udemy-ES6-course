// fat arrow functions let us write cleaner code
// they allow us to ommit unnecessary characters

// how a regular function is written
const add = function(a, b) {
	return a + b;
}

console.log(add(3,4)); // 7


// the change that is introduced with ES6
// instead of using the function keyword, use a fat arrow instead =>
const add2 = (a, b) => {
	return a + b;
}

console.log(add2(3,4)); // 7


// Alternative syntax when using a single javascript expression, remove the brackets and the word return aka an implicit return
const add3 = (a, b) => a + b;

console.log(add3(3,4)); // 7


// Whenever there is a single argument, the parentheses can be omitted
const double = number => 2 * number;

console.log(double(5)); // 10

// If there are no arguments at all, parends are still needed
const returnTwo = () => 2;

console.log(returnTwo()); // 2


// Ex. 1 - using fat arrow functions with array helpers
// ES5 way
const numbers = [1, 2, 3];

var doubledArray = numbers.map(function(number) {
	return 2 * number;
});

console.log(doubledArray); // [ 2, 4, 6 ]

// ES6, using fat arrows now
// we ommit curly braackets, the word return, parentheses around the arguement, and no semicolon after the function. There is a semicolon to finish the map function
var doubledArray2 = numbers.map(number => 2 * number);

console.log(doubledArray2); // [ 2, 4, 6 ]



