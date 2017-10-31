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


// Ex. 2 - Using fat arrow functions to hold the value of "this"
const team = {
	members: ['Jane', 'Bill'],
	teamName: 'Super Squad',
	teamSummary: function() {
		// In the map function, if we don't use a fat arrow function this.teamName would give an error because "this" becomes lost since it's a function within a function
		// Arrow functions bind the value of 'this' to the surrounding context
		return this.members.map(member => `${member} is on team ${this.teamName}`);
	}
};

console.log(team.teamSummary()); // [ 'Jane is on team Super Squad', 'Bill is on team Super Squad' ]


// Ex. 3 - Refactoring Keyword Functions
// The function below uses the 'function' keyword.  There's nothing wrong with using the 'function' keyword here, but it might look a bit nicer if we refactor it to use the fat arrow syntax instead.  
const fibonacci = function(n) {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
// Refactored
const fibonacci2 = n => {
	if (n < 3) return 1;
	return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci2(7)); // 13


// Ex. 4 - Arrow Functions Aren't Always a Solution
// Arrow functions bind the value of 'this' to the surrounding context, and sometimes this isn't the behavior we expect.  The code below has an object that represents a users profile.  The profile has a 'name' currently.  Add another key to this object called 'getName'.  'getName' should be a function that returns the profiles name, using 'this.name'.  Does the solution work with a fat arrow function or will you have to use a function keyword instead?
const profile = {
    name: 'Alex',
    getName: function() {
        return this.name; // returns Alex
        // However, if we used an arrow function, it would give an error of cannot get name of undefined
        // We cannot use an arrow function here
    }
};
