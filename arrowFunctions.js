// how a regular function is written
const add = function(a, b) {
	return a + b;
}

console.log(add(3,4)); // 7


// the change that is introduced with ES6
// instead of using the function keyword, use a fat arrow instead =>
const add2 = (a, b) => {
	return a + b;
}

console.log(add2(3,4)); // 7


// Alternative syntax when using a single javascript expression, remove the brackets and the word return aka an implicit return
const add3 = (a, b) => a + b;

console.log(add3(3,4)); // 7