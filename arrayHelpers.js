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



// Ex. 1 ------------------------------
// create an array of numbers
var numbers = [1, 2, 3, 4, 5];

// create a variable to hold the sum
var sum = 0;

// loop over the array, incrementing the sum variable
numbers.forEach(function(number) {
	sum += number;
});

// log the sum variable
console.log(sum); 

// another way is to define the iterator function separately and pass it in to the forEach helper method
function adder(number) {
	sum += number;
}

// we don't add parentheses to adder like this 'adder()' because we don't want to immediately call it, we only want to call on it once every iteration
numbers.forEach(adder);

console.log(sum); //15