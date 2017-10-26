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

