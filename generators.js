// A generator is a function that can be entered and exited multiple times
// We ccan run some code, return a value, and then go right back into the function at the same place that we left it
// a generator always has a star next to the funciton keyword
function* numbers() {
 	yield;
 } 

 const gen = numbers();

// When removing the yield keyword from the function, 'done' has a value of true both times instead of starting as false and then flipping over to true like we see below
 console.log(gen.next()); // { value: undefined, done: false }
 console.log(gen.next()); // { value: undefined, done: true }