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