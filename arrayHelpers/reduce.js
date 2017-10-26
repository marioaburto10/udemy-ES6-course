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
