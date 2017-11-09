// DESTRUCTURING OBJECTS - 'goldmine of ES6'

// Destructuring with ES5
var expense = {
	type: 'Business',
	amount: '$45 USD'
};

// this has a lot of duplicate code
// we have to make a variable twice, type is used twice, amount is used twice, and expense is used twice
	// var type = expense.type;
	// var amount = expense.amount;

// With ES6
// when curly braces are used on the left, it does not mean we are creating an object!
// this means we are declaring two variables:
// one variable will be type and we want it to refrence expense.type
// the same with amount 
// name of variable must be identical to the property, it must exist
const { type, amount } = expense;
console.log(type, amount); // Business $45 USD


// Destructuring Argument Objects
// ES5 way
var savedFile = {
	extension: 'jpg',
	name: 'repost',
	size: '14040'
};

// Here we use the file word 3 times, sort of repetitive unclean code
function fileSummary(file) {
	return `${file.name}.${file.extension} is a size of ${file.size}`;
}

// ES6 way
// cleaner way of writing code
// here we destructure the object in the argument section of the function
function fileSummary2({extension, name, size}) {
	return `${name}.${extension} is a size of ${size}`;
}

console.log(fileSummary2(savedFile)); // repost.jpg is a size of 14040


// Destructuring Arrays
// similar to destructuring arrays
const companies = [
	'Google',
	'Facebook',
	'Uber'
];
// looks cleaner
// to destructure a property we use curly braces, to destructure an element we use square brackets
const [ name, name2, name3 ] = companies;
const { length } = companies; 
console.log(name, name2, name3, length); // Google Facebook Uber 3
// we can also use the rest operator like so
const [ name1, ...rest ] = companies;
console.log(name1, rest); // Google [ 'Facebook', 'Uber' ]