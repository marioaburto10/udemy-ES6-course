// We want to pass in an arbitrary amount of numbers into a function to return their sum
// ES5 way
function addNumbers(a,b,c,d,e) {
	// we have to put the arguments being passed in, into an array to be able to iterate through them
	const numbers = [a,b,c,d,e];

	return numbers.reduce((sum, number) => {
		return sum + number;
	}, 0);
}
// However the amount of parameters that we can pass in will always be fixed and everytime we want to pass in more arguments we would have to add more arguments to the argument list

console.log(addNumbers(1,2,3,4,5)); // 15

// ES6 way using the rest operator
// Refactored code
// Here we use the rest operator, shows as three dots ..., to indicate that any amount of arguments may be passed in which are then stored into a numnbers array
function addNumbers2(...numbers) {

	return numbers.reduce((sum, number) => {
		return sum + number;
	}, 0);
}
// However the amount of parameters that we can pass in will always be fixed and everytime we want to pass in more arguments we would have to add more arguments to the function itself

// no matter how many arguments we pass in, the function still works the same way
console.log(addNumbers2(1,2,3)); // 6
console.log(addNumbers2(1,2,3,4,5,6,7,8,9)); // 45


// We want to join arrays together 
const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];
const fallColors = ['fire red', 'fall orange'];

// ES5 way
// We can use concat() to join arrays
console.log(defaultColors.concat(userFavoriteColors)); // [ 'red', 'green', 'orange', 'yellow' ]
console.log(defaultColors.concat(userFavoriteColors, fallColors)); // [ 'red', 'green', 'orange', 'yellow', 'fire red', 'fall orange' ]

// ES6 way, Refactored using the spread operator
// we can use the spread operator by adding three dots ... infront of an array to negate the [] and spread out what is inside the array
// we can use it on multiple arrays and we can even add another element to the array. 
// the code is easier to read and understand using spread
console.log([...defaultColors, ...userFavoriteColors]); // [ 'red', 'green', 'orange', 'yellow' ]
console.log(['blue', ...defaultColors, ...userFavoriteColors]); // [ 'blue', 'red', 'green', 'orange', 'yellow' ]


// Ex. 1 - Using rest and spread together
// We want to make a function to validate our shopping list. We want to make sure that we are always picking up milk no matter what is on our shipping list

// In this function, we are passing in some unknown amount of items as strings using the rest operator and joining them into an array called items
function validateShoppingList(...items) {
	// here we are checking to see if milk exists in the array of items
	if (items.indexOf('milk') < 0) {
		// if it does not exist, spread over the items array and prepend milk so that a new array is formed
		return ['milk', ...items];
	}

	// if milk is already in the array of items, just return that array
	return items;
}

// even though we forgot to add milk to our list of groceries, it still gets added to the returned array
console.log(validateShoppingList('orange', 'bread', 'eggs')); // [ 'milk', 'orange', 'bread', 'eggs' ]

