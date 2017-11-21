// Run this is google Chrome console
// Promise() is built in to the chrome browser, no need to import it from an external source
// resolve and reject are both functions are automatically provided with the inner function being passed into the Promise constructor
promise = new Promise((resolve, reject) => {
	// resolve();  will give a PromiseStatus of "resolved" instead of "pending"
	// reject(); will give a PromiseStatus of "rejected" and needs to be handled
});
	
console.log(promise); // Promise { <pending> } 