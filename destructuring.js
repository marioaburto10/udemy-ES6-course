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


// Mixing destucturing Arrays and Objects
const Companies = [
	{ name: 'Google', location: 'Mountain View'},
	{ name: 'Facebook', location: 'Menlo Park'},
	{ name: 'Uber', location: 'San Francisco'}
];

const [{ location }] = Companies;
// Here we first choose the first element in the array and then we choose the property of location of that object to get Mountain View
console.log(location); // Mountain View

const Google = {
	locations: ['Mountain View', 'New York', 'London']
};

// We first point to the locations property in the array and then we say we want the first element in the value's array
const { locations: [ Location ] } = Google
console.log(Location); // Mountain View


// When to use destructuring ex. 1
const user = {
	username: 'myname',
	password: 'mypassword',
	email: 'myemail',
	dateOfBirth: '1/1/1990'
};

// destructuring here is helpful because we do not have to remember the order of the properties in the object or the order of the arguments in a function
// as long as there is a reference to the properties, they will be available
function signup({ email, password, city, username, dateOfBirth }) {
	// create new user
}

// When to use destructuring ex. 2
// Instead of an array of arrays, we want an array of objects with an x and y keys
const points = [
	[4, 5],
	[10, 1],
	[0, 40 ]
];

// we can use the map array helper to iterate through the points array and return an array of objects instead
const newArray = points.map(([ x, y]) => {
	// since the new object has keys x and y and values of x and y, we can use the improved object literal syntax
	// instead of { x: x, y: y} we use { x, y}
	return { x, y};
});

console.log(newArray); // [ { x: 4, y: 5 }, { x: 10, y: 1 }, { x: 0, y: 40 } ]


// Ex. 1 - Destructuring in Practice
// The snippet of code below duplicates references to 'profile' inside of the 'isEngineer' function.  Perhaps we can reduce the amount of code used for referencing the 'title' and 'department' properties.  Refactor this code to use destructuring.
	const profile = {
	  title: 'Engineer',
	  department: 'Engineering'
	};

	function isEngineer(profile) {
	  var title = profile.title;
	  var department = profile.department;
	  return title === 'Engineer' && department === 'Engineering';
	}

	// Refactored using destructuring
	function isEngineer2(profile) {
	  const { title, department } = profile;
	  return title === 'Engineer' && department === 'Engineering';
	}

	// ORRRRRR we can destructure the objects in the argument section to clean it up even more
	function isEngineer3({ title, department }) {
	  return title === 'Engineer' && department === 'Engineering';
	}

	console.log(isEngineer3(profile)); // true



// Ex. 2 - Array Destructuring in Practice
// The 'classes' variable holds an array of arrays, where each array represents a single class that a student is enrolled in.  Convert this array of arrays into an array of objects, where each object has the keys 'subject', 'time', and 'teacher' and assign the result to 'classesAsObject.  Use array destructuring and the map helper.
	const classes = [
	  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
	  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
	  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
	];

	const classesAsObject = classes.map(([ subject, time, teacher ]) => {
		return { subject, time, teacher };
	});

	console.log(classesAsObject);  // [ { subject: 'Chemistry', time: '9AM', teacher: 'Mr. Darnick' }, { subject: 'Physics', time: '10:15AM', teacher: 'Mrs. Lithun' }, { subject: 'Math', time: '11:30AM', teacher: 'Mrs. Vitalis' } ]


// Ex. 3 - Recursion with Destructuring
// This one is probably the hardest exercise in the entire course!  
// Use array destructuring, recursion, and the rest/spread operators to create a function 'double' that will return a new array with all values inside of it multiplied by two.  Do not use any array helpers!
	const numbers = [1, 2, 3];

	function double([ number, ...restOfNumbers]) {
		// if the first element in the array is undefined, return an empty array
		if (number === 'undefined') return [];
		// if the array with the rest of the elements is empty, just return the first element doubled
		if (restOfNumbers.length === 0) return [ 2 * number];

		// if neither is the case, return the first element doubled, followed by spreading out the reocurring double function until an empty array is returned
		return [ 2 * number, ...double(restOfNumbers)];
	}

	console.log(double(numbers)); // [ 2, 4, 6 ]
