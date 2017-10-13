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
