// Run this is google Chrome console
// Promise() is built in to the chrome browser, no need to import it from an external source. It is a constructor
// resolve and reject are both functions are automatically provided with the inner function being passed into the Promise constructor
const promise = new Promise((resolve, reject) => {
	resolve(); // will give a PromiseStatus of "resolved" instead of "pending"
	// reject(); // will give a PromiseStatus of "rejected" and needs to be handled
});

// .then() only gets called when the promise was resolved
// multiple callbacks can be chained on using the .then() function that get executed one after another
promise
	.then(() => console.log('finally finished!')) // will only run if the Promise was resolved
	.then(() => console.log('I was also ran!!!')) // will only run if the Promise was resolved
	.catch(() => console.log('uh oh!!')); // will only run if the Promise was rejected

// .catch() only gets called when the promise was resolved
// promise.catch(() => {
// 	console.log("uh oh something went wrong");
// })


const promise2 = new Promise((resolve, reject) => {
	// if a process is lengthy, we can reject it (or resolve it) after 3 seconds using SetTimeOut
	setTimeout(() => {
		resolve();
	}, 3000);
});

promise2
	.then(() => console.log('finally finished!')) // this will only log after 3 seconds
	.then(() => console.log('I was also ran!!!')) // this will only log after 3 seconds
	.catch(() => console.log('uh oh!!')); // this will not log out since the Promise was resolved



// To do an ajax call, just put the url inside of fetch()
// fetch() is a function that is built in with the browser as well
const url = "https://jsonplaceholder.typicode.com/posts/";

// WARNING: WILL NOT WORK IF RAN ON NODE, MUST BE COPIED AND PASTED INTO THE GOOGLE CHROME CONSOLE
fetch(url)
	// this takes the response that we got back from the server and pulls some readable json data
	.then(response => response.json())
	.then(data => console.log(data)); // we get back a list of objects, a list of posts


// STILL HIGHLY RECOMMEND TO USE AJAX UTILITY LIBRARIES LIKE AXIOS OR EVEN JQUERY
// THIS IS BECAUSE IF THE REQUEST ACTUALLY HITS THE SERVER AND RETURNS A STATUS CODE AND THE STATUS CODE IS HIGHER THAN 300 (STATUS OF NOT SUCCESSFUL), IT DOES NOT TRIGGER THE catch() SCENARIO, INSTEAD IT WILL TRIGGER THE .then() SCRNARIO AND WILL STILL LOG THE RESPONSE
// IT WILL ONLY TRIGGER THE catch() CASE IF THE NETWORK REQUEST FLAT OUT FAILS TO BE ISSUED AT ALL aka AN INCORRECT DOMAIN NAME