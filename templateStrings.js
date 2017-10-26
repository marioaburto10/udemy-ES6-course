// Template strings or Template Literals

// Old way to join javascript vaiables with a string
function getMessage() {
	const year = new Date().getFullYear();

	console.log(year);

	return "The year is: " + year;
}

console.log(getMessage());

// refactored code
// we no longer use double or single quotes, we now use back ticks to write a string
// Wrap the variable in a dollar sign and opening and closing curly brackets and put it inside the back ticks

function getMessage2() {
	const year = new Date().getFullYear();

	console.log(year);

	return `The year is ${year}`;
}

console.log(getMessage2());