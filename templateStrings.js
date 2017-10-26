// Template strings or Template Literals

// Old way to join javascript vaiables with a string
function getMessage() {
	const year = new Date().getFullYear();

	console.log(year); // 2017

	return "The year is: " + year;
}

console.log(getMessage()); // The year is: 2017

// refactored code
// we no longer use double or single quotes, we now use back ticks to write a string
// Wrap the variable in a dollar sign and opening and closing curly brackets and put it inside the back ticks
// Gives it a more legible look

function getMessage2() {
	const year = new Date().getFullYear();

	console.log(year); // 2017

	return `The year is ${year}`;
}

console.log(getMessage2()); // The year is 2017


// Ex. 1 - When To Reach for Template Strings
	// PHP code - string concatenation inside some object
	// $data = '{"device_id":"'.$device_id.'","guid":"'.$guid.'","username":"'.$username.'",'"}';

	// refactored to ES6
	const device_id = 4;
	const guid = 20;
	const username = "hello";

	const data = `{"device_id":" "${device_id}", "guid": "${guid}", "username": "${username}" " ","}`;

	console.log(data); // {"device_id":" "4", "guid": "20", "username": "hello" " ","}

	// NOTE: Do not use string templates when making one variable equal to another variable and it is just the variable


	// Ex. 3 - Template Strings in Practice
	// Refactor the function to use template strings
	function doubleMessage(number) {
	  return "Your number doubled is " + (2 * number);
	}
	// refactored
	function doubleMessage2(number) {
	  return `Your number doubled is ${(2 * number)}`;
	}
	console.log(doubleMessage2(5)); // Your number doubled is 10


	// Ex. 3 - Name Helpers
	// Refactor the function to use template strings
	function fullName(firstName, lastName) {
	  return `${firstName} ${lastName}`;
	}
	console.log(fullName("thing1", "thing2")); // thing1 thing2
