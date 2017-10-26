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

