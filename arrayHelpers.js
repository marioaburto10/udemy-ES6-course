// forEach() helper method -------------------------------------------------------------------------------------------------------------------------------------------------

	var colors = ['red', 'blue', 'green'];

	// old way of iterating through an array using a for loop
	// there are many elements involved with for loops that make them prone to errors
	// the more logic that we "stuff" into a block of code, the more complex it becomes to keep track of
	for (var i = 0; i < colors.length ; i++) {
		console.log(colors[i]); // red blue green
	}


	// forEach array helper method, the new way to iterate through an array

	// we are passing in an anonymous function into the forEach helper method that gets called on for each iteration. "color" here is one interation
	// less code to write, less chance of errors
	colors.forEach(function(color) {
		console.log(color); // red blue green
	});



	// Ex. 1 add numbers in an array 
	// create an array of numbers
	var numbers = [1, 2, 3, 4, 5];

	// create a variable to hold the sum
	var sum = 0;

	// loop over the array, incrementing the sum variable
	numbers.forEach(function(number) {
		sum += number;
	});

	// log the sum variable
	console.log(sum); //15



	// Another way is to define the iterator function separately and pass it in to the forEach helper method
	var sum2 = 0;

	function adder(number) {
		sum2 += number;
	}

	// we don't add parentheses to adder like this 'adder()' because we don't want to immediately call it, we only want to call on it once every iteration
	numbers.forEach(adder);

	console.log(sum2); //15




	// Ex. 2 - refactor the  code below to use an forEach helper instead 
	// note: this is just an example so savePost() is not defined
	function handlePosts() {
	    var posts = [
	      { id: 23, title: 'Daily JS News' },
	      { id: 52, title: 'Code Refactor City' },
	      { id: 105, title: 'The Brightest Ruby' }
	    ];
	    
	    for (var i = 0; i < posts.length; i++) {
	      savePost(posts[i]);
	    }
	}

	// refactored code
	function handlePosts() {
	    var posts = [
	      { id: 23, title: 'Daily JS News' },
	      { id: 52, title: 'Code Refactor City' },
	      { id: 105, title: 'The Brightest Ruby' }
	    ];
	    
	    posts.forEach(function(post){
	        savePost(post);
	    });
	}


	// Ex. 3 - Processing Values 
	// The array below contains an array of objects, each of which is a representation of an image.  Using the forEach helper, calculate the area of each image and store it in a new array called 'areas'.  The area of an image can be calculated as 'image.height * image.width'.
	var images = [
	  { height: 10, width: 30 },
	  { height: 20, width: 90 },
	  { height: 54, width: 32 }
	];
	var areas = [];

	images.forEach(function(image){
		var area = image.height * image.width;
	    areas.push(area);
	});

	console.log(areas); // [300, 1800, 1728]



// map() helper method - used to modify records in an array of data -------------------------------------------------------------------------------------------------------------

	var numbers = [1, 2, 3];
	var doubledNumbers = [];

	for (var i = 0; i < numbers.length; i++) {
		doubledNumbers.push(numbers[i] * 2);
	}

	console.log(doubledNumbers); // [2, 4, 6]

	// refactored code using map() helper method
	 
	// using the map() helper with the numbers array and passing in an anonymous function and assign it to a variable that will be a new resulting array. "number" here is one iteration
	// must have 'return' or else the map helper will not return actual values and will give null instead
	// we want to create another array instead of modifying the original array to keep our code/data clean and easy to understand
	 var doubled = numbers.map(function(number){
	 	return number * 2;
	 });

	 console.log(doubled); // [2, 4, 6]


	// Ex 1. 
	// basic example, map() is common with arrays of objects
	var cars = [
		{model : 'Buick', price: "cheap"},
		{model : 'Camaro', price: "expensive"}
	];

	// this is called a pluck because we are plucking a particular property off of each object from an array. This is popular with client side framworks like React and Angular
	var prices = cars.map(function(car){
		return car.price;
	});

	console.log(prices); // ['cheap', 'expensive']

	// Ex. 2 Plucking Values 
	// Using map, create a new array that contains the 'height' property of each object.  Assign this new array to the variable 'heights'.
	var images = [
	  { height: '34px', width: '39px' },
	  { height: '54px', width: '19px' },
	  { height: '83px', width: '75px' },
	];

	var heights = images.map(function(image){
	   return image.height; 
	});

	console.log(heights); // ['34px', '54px', '83px']


	//Ex. 3 Calculating Values with Map 
	// Using map, create a new array that contains the distance / time value from each trip
	var trips = [
	  { distance: 34, time: 10 },
	  { distance: 90, time: 50 },
	  { distance: 59, time: 25 }
	];

	var speeds = trips.map(function(trip){
	   return trip.distance / trip.time; 
	});

	console.log(speeds);


	// Ex. 4 Challenging - Implementing 'Pluck' 
	// Implement a 'pluck' function.  Pluck should accept an array and a string representing a property name and return an  array containing that property from each object. 

	var paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];

	function pluck(array, property) {
	    var newArray = array.map(function(index) {
	        return index[property];
	    });
	    
	    console.log(newArray); 

	    return newArray;
	}

	pluck(paints, 'color'); // ['red', 'blue', 'yellow']


// Selecting needed data with the filter() helper -----------------------------------------------------------------------------------------------------------------------------------------
	
	// we want to filter out all products that are fruits
	// this is the old way of filtering out data using a for loop
	var products = [
		{ name: 'cucumber', type: 'vegetable'},
		{ name: 'banana', type: 'fruit'},
		{ name: 'celery', type: 'vegetable'},
		{ name: 'orange', type: 'fruit'}
	];

	var filreredProducts = [];

	for ( var i = 0 ; i < products.length; i++) {
		if (products[i].type === 'fruit') {
			filreredProducts.push(products[i]);
		}
	}

	console.log(filreredProducts); // [{ name: 'banana', type: 'fruit'}, { name: 'orange', type: 'fruit'}]

	// new way to filter data in an array or objects, using filter() helper method
	// the filter() helper using an iterator function that returns a truthy or falsy value. filter() will dump all elements from the original array that are truthy into a new array 
	var filteredProducts2 = products.filter(function(product) {
		return product.type === 'fruit' 
	});

	console.log(filteredProducts2); // [{ name: 'banana', type: 'fruit'}, { name: 'orange', type: 'fruit'}]


	// Ex. 1 - more complex example using filter()
	var products2 = [
		{ name: 'cucumber', type: 'vegetable', quantity: 0, price: 1},
		{ name: 'banana', type: 'fruit', quantity: 10, price: 15}, 
		{ name: 'celery', type: 'vegetable', quantity: 30, price: 9},
		{ name: 'orange', type: 'fruit', quantity: 3, price: 5}
	];

	// we want to filter products with type 'vegetable', quantity greater than 0, and price less than 10
	var filteredProducts3 = products2.filter(function(product) {
		return product.type === 'vegetable' 
		&& product.quantity > 0
		&& product.price < 10 ;
	});

	console.log(filteredProducts3); // [ { name: 'celery', type: 'vegetable', quantity: 30, price: 9 } ]


	// Ex. 2 - Choosing when to filter
	// more practical example using blog posts
	var post = { id: 4, title: "Latest Post"};

	var comments = [
		{ postId: 4, content: 'awesome post'},
		{ postId: 3, content: 'cool story'},
		{ postId: 4, content: 'it was ok'},
		{ postId: 1, content: 'nice'}
	];

	function commentsForPost(post, comments) {
		return comments.filter(function(comment) {
			return comment.postId === post.id;
		})
	}

	commentsForPost(post, comments); // [ { postId: 4, content: 'awesome post' }, { postId: 4, content: 'it was ok' } ]


	// Example 3 - Filtering Values
	// Filter the array of numbers using the filter helper, creating a new array that only contains numbers greater than 50.  Assign this new array to a variable called 'filteredNumbers'. 
	var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

	var filteredNumbers = numbers.filter(function(number) {
	   return number > 50; 
	});

	console.log(filteredNumbers); // [ 55, 65, 75, 85, 95 ]


	// Ex 4 - Handling Permissions with Filter
	// Filter the array of users, only returning users who have admin level access.  Assign the result to the variable 'filteredUsers'.

	var users = [
	 { id: 1, admin: true },  
	 { id: 2, admin: false },
	 { id: 3, admin: false },
	 { id: 4, admin: false },
	 { id: 5, admin: true },
	];

	var filteredUsers = users.filter(function(user) {
	   return user.admin === true; 
	}); 

	console.log(filteredUsers); // [ { id: 1, admin: true }, { id: 5, admin: true } ]


	// CHALLENGE - Implementing 'reject'.
	// Create a function called 'reject'.  Reject should work in the opposite way of 'filter' - if a function returns 'true', the item should *not* be included in the new array. 
	var numbers = [10, 20, 30]; 

	function reject(array, iteratorFunction) {
    	// the iterator function returns a boolean so I'm simply negating it and passing to it the value of each number in a filter of my own.
    	return array.filter(function(item) {
    		return !iteratorFunction(item);
    	});
	}  

	var lessThanFifteen = reject(numbers, function(number){
	  	return number > 15;
	}); 

	console.log(lessThanFifteen); // [10]


// Querying for Records using find() helper -----------------------------------------------------------------------------------------------------------------------------------------
	var users2 = [
		{ name: 'Jill'},
		{ name: 'Alex'},
		{ name: 'Bill'},
	];

	var user;

	// old way, looking for a particular user in an array of objects
	for (var i = 0; i < users2.length; i++) {
		if (users2[i].name === "Alex") {
			user = users2[i];
			break; // using break to stop the loop from doing unneccesary iterations 
		}
	}

	console.log(user); // { name: 'Alex' }

	// new way, using find() helper method
	// an iterator function gets passed in that will get called once for each iteration
	// it will return a truthy or falsy value
	// * only slight drawback is that it will break as soon as a truthy value is returned, so if there are multiple "Alex" names, only the first one will be returned
	var user2 = users2.find(function(user) {
		return user.name === "Alex";
	});

	console.log(user2); // { name: 'Alex' }

	// Ex. 1 - find() continued
	var posts2 = [
		{ id: 1, title: "New Post"},
		{ id: 2, title: "Old Post"}
	];

	var comment = { postId: 1, content: "Great Post"};

	// Create a function that will take in a posts array and a comment, to find what post belongs to that comment
	function postForComment(posts, comment) {
		return posts.find(function(post) {
			return post.id === comment.postId;
		});
	}
	
	console.log(postForComment(posts2, comment)); // { id: 1, title: 'New Post' }


	// Ex. 2 - Using find() to search for Admin users 
	// Find the user in the users's array who is an admin.  Assign this user to the variable 'admin'.
	var users3 = [
	  { id: 1, admin: false },
	  { id: 2, admin: false },
	  { id: 3, admin: true }
	];

	var admin = users3.find(function(user) {
	   return user.admin === true; 
	});

	console.log(admin); // { id: 3, admin: true }


	//Ex. 3 - Find the account with a balance of 12 and assign it to the variable 'account'.
	var accounts = [
	  { balance: -10 },
	  { balance: 12 },
	  { balance: 0 }
	];

	var account = accounts.find(function(account) {
	   return account.balance === 12; 
	});

	console.log(account); // { balance: 12 }

	// Ex. 3 - Challenge: Custom findWhere Helper
	// This is a tough one!  The most common find operation is to an object that has a given property.  Rather than writing out a full function every time, it would be great if we has a shorthand syntax to find an object like this:
	// findWhere(ladders, { height: '20 feet' });
	// The object { ladders: '20 feet' } should be used as the search criteria - we would want to find a ladder whose 'height' property was '20 feet';
	// Write a 'findWhere' function that achieves this shorthand approach.  'findWhere' should return the found object.
	var ladders = [
	  { id: 1, height: 20 },
	  { id: 3, height: 25 }
	];

	function findWhere(array, criteria) {
	  // creating a property variable to hold the "height" property in the criteria object
	  var property = Object.keys(criteria)[0];

	  return array.find(function(item) {
	  			// checking to see if both objects have the same method, given the same property
	    return item[property] === criteria[property];
	  });
	}

	console.log(findWhere(ladders, {height: 20})); // { id: 1, height: 20 }


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


// reduce() helper method is used to condense values in an array to one value --------------------------------------------------------------------------------------------------------------------------
	var numbers2 = [10, 20, 30];
	var sum3 = 0;

	// old way of getting a sum of numbers in an array using a for loop
	for(var i = 0; i < numbers2.length; i++) {
		sum3 += numbers2[i];
	}

	console.log(sum3); // 60

	// new way using reduce() hlper method
	// reduce() helper method takes in two arguments, the iterator function and an initial value. The iterator function takes two arguments, the initial value that was passed in to reduce() and an element in the array
	// the iterator function will start with the initial value of 0 and, in this case, add it to the first element of the array which will have a resulting value. That resulting value will then be used with the second iteration and so on.
	numbers2.reduce(function(sum, number) {
		return sum + number;
	}, 0); // will return 60


	// Ex. 1 - return an array of strings of colors
	var primaryColors = [
		{ color: 'red'},
		{ color: 'yellow'},
		{ color: 'blue'}
	];

	// here "previous" initially takes the value of an empty array
	primaryColors.reduce(function(previous, primaryColor) {
		previous.push(primaryColor.color);

		return previous;
	}, []); // returns ["red", "yellow", "blue"]


	// Ex. 2 - Balanced Parentheses problem
	// Given a string of parentheses, are the expresions balanced?
	
	// writing a function that will check if the string passed in has balanced parentheses
	function balancedParens(string) {
		// first we turn the string into an array using split() because reduce() only works for arrays
		// we will start with a counter of 0, we will increment by 1 for every opening parenthesis and decrease by 1 for every closing parenthesis
		// If the resulting value is anything other than 0, the expressions are unbalanaced
		// However, we want to get a truthy or falsy value instead of a number value
		// if it is a positive or negative number, true is returned. if 0 is returned, false will be returned. Therefore we add "!" to switch it from false to true and vice versa. So if we get 0, the answer is true
		return !string.split("").reduce(function(previous, char) {
			// we add this first if statement incase this string is inputed ")(", because this is not balanced and will give a negative value first
			if (previous < 0) { return previous; }
			if (char === "(") { return ++previous; }
			if (char === ")") { return --previous; }
			return previous;
		}, 0);
	}

	console.log(balancedParens(")((()))")); // false


	// Ex. 3 - Distance Traveled
	// Use the 'reduce' helper to find the sum of all the distances traveled.  Assign the result to the variable 'totalDistance'
	var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

	var totalDistance = trips.reduce(function(acc, trip) {
	    return acc + trip.distance;
	}, 0);

	console.log(totalDistance); // 47


	// Ex. 4 - Reducing Properties
	// Use the 'reduce' helper to create an object that tallies the number of sitting and standing desks.  The object returned should have the form '{ sitting: 3, standing: 2 }'.  The initial value has been provided to you.
	var desks = [
	  { type: 'sitting' },
	  { type: 'standing' },
	  { type: 'sitting' },
	  { type: 'sitting' },
	  { type: 'standing' }
	];

	var deskTypes = desks.reduce(function(acc, desk) {
	    if (desk.type === 'sitting') { acc.sitting ++ }
	    if (desk.type === 'standing') { acc.standing ++ }
	    return acc;
	}, { sitting: 0, standing: 0 });

	console.log(deskTypes);


	// Ex 5 - Hardmode: Custom 'Unique' Helper
	// Write a function called 'unique' that will remove all the duplicate values from an array.
	var numbers3 = [1, 1, 2, 3, 4, 4];

	// if the element in the array cannot be found in the accumulator array, then push it to the acc array, otherwise do nothing
	// then reduce() will produce an array without doubles
	function unique(array) {

	  return array.reduce(function(acc, element) {
	      if (!acc.find(function(el) {
	      	return el === element;
	      })) { acc.push(element)}
	      	return acc;
	  }, []);
	}

	console.log(unique(numbers3)); // [ 1, 2, 3, 4 ]
