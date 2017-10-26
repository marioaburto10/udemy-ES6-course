// Using every() and some() helpers to condense an array of data into a single value ------------------------------------------------------------------------------------------------------
	var computers = [
		{ name: 'Apple', ram: 24 },
		{ name: 'Compaq', ram: 4 },
		{ name: 'Acer', ram: 32 }
	];

	// old way of iterating through array to get a true or false value
	// looking to see if we have computers that can run a progam that requires 16GB of RAM
	var allComputersCanRunProgram = true;
	var onlySomeComputersCanRunProgram = false;

	for (var i = 0; i < computers.length; i++) {
		var computer = computers[i];

		// checking to see if any computer in the array has less than 16GB of ram, it it does or doesn't then change the allComputersCanRunProgram and onlySomeComputersCanRunProgram variables accordingly
		if (computer.ram < 16) {
			allComputersCanRunProgram = false;
		} else {
			onlySomeComputersCanRunProgram = true;
		}
	}

	console.log(allComputersCanRunProgram , onlySomeComputersCanRunProgram); // false , true

	// using every() helper
	// an iterator function is passed in that will iterate through each element in the array, check for a condition, and return a boolean
	// if all of the returned booleans are not true, then false will be returned.
	// if all returned boolens are true, then true will be returned
	computers.every(function(computer) {
		return computer.ram > 16;
	}); // this returns false

	// using some() helper
	// looking to see if ANY records in the array satisfy the criteria
	computers.some(function(computer) {
		return computer.ram > 16
	}); // this returns true

	// THE BIGGEST DIFFERENCE BETWEEN every() and some() is that every() is using && when checking between iterations while some() uses ||


	// Ex. 1
	var names = [
		"Alexandria",
		"Mathew",
		"Joe"
	];

	// Does every name have a length longer than 4
	names.every(function(name) {
		return name.length > 4;
	}) // returns false

	// Do some names have a length longer than 4
	names.some(function(name) {
		return name.length > 4;
	}) // returns true


	// Ex. 2 - more practical example - checking to see if all fields have a length greater than 0, aka they exist, aka all fields are valid
	// creating a Field function that will create a new field in some type of database
	function Field(value) {
		this.value = value;
	}

	// adding a prototype method of validate, which is a function that will check to see if the value has a length greater than 0
	Field.prototype.validate = function() {
		return this.value.length > 0
	}

	var username = new Field("test_username");
	var password = new Field("my_password");
	var birthdate = new Field("10/10/2010");

	console.log(username.validate(), password.validate(), birthdate.validate()); // true, true, true

	// Instead of calling the validate function 3 times, we can use the every() helper to check all three fields at once
	var fields = [username, password, birthdate];

	fields.every(function(field) {
		return field.validate();
	}); // returns true



	// Ex. 3 - Finding Submitted Users
	// Given an array of users, return 'true' if every user has submitted a request form.  Assign the result to the variable 'hasSumbmitted'.

	var _users = [
	  { id: 21, hasSubmitted: true },
	  { id: 62, hasSubmitted: false },
	  { id: 4, hasSubmitted: true }
	];

	var hasSubmitted = _users.every(function(user) {
	   return user.hasSubmitted === true; 
	});

	console.log(hasSubmitted); // false


	// Ex. 4 - In Progress Network Requests
	// Given an array of network objects representing network requests, assign the boolean 'true' to the variable 'inProgress' if any network request has a 'status' of 'pending'.
	var requests = [
	  { url: '/photos', status: 'complete' },
	  { url: '/albums', status: 'pending' },
	  { url: '/users', status: 'failed' }
	];

	var inProgress = requests.some(function(request) {
	    return request.status === 'pending'; 
	});

	console.log(inProgress); // true
