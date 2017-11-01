// before ES6 and default function arguments, you had to specify what the defualt argument would be equal to like so
function makeAjaxRequest(url, method) {
	if(!method) {
		method = 'GET';
	}

	return method;
}

console.log(makeAjaxRequest('google.com')); // GET

// Now with ES6, you can specify the default argument in the argument list of the function without the need to write some logic for it
function makeAjaxRequest2(url, method = 'GET') {

	return method;
}

// When nothing is passed for method, it uses the default value for method
console.log(makeAjaxRequest2('google.com')); // GET
// When an there is a valid argument passed, it will ovveride the default value like so
console.log(makeAjaxRequest2('google.com', 'POST')); // POST
// When passing in null, method will not get reassigned to 'GET'
console.log(makeAjaxRequest2('google.com', null)); // null