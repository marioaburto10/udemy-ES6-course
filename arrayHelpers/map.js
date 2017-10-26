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

