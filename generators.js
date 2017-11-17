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


 // Ex. 1 - Buying groceries with money at the grocery store
 // We start on the sidewalk, crossover to the grocery store, and cross back to the sidewalk
 	function* shopping() {
 		// stuff on sidewalk

 		// walking down the sidewalk with cash in our pocket

 		// go into the store with cash
 		const stuffFromStore = yield 'cash';

 		// we can call yield in a generator multiple times
 		// walking into laundry place
 		const cleanClothes = yield 'laundry';

 		// walking back home
 		return [stuffFromStore, cleanClothes];
 	}

 	// stuff in the store
 	// caling on shopping() does nothing whatsoever
 	const gen2 = shopping();

 	// leaving our house

 	console.log(gen2.next()); // { value: 'cash', done: false }

 	// walked into the store
 	// walking up and down the aisles..
 	// purchase our stuff

 	// leaving store with groceries
 	console.log(gen2.next('groceries')); // { value: 'groceries', done: false }

 	// we execute code in a generator by calling .next();
 	console.log(gen2.next('clean clothes')); // { value: [ 'groceries', 'clean clothes' ], done: true }



// Ex. 2 
	function* colors() {
		yield 'red';
		yield 'blue';
		yield 'green';
	}

	const gen3 = colors();

	console.log('---------------');
	console.log(gen3.next()); // { value: 'red', done: false }
	console.log(gen3.next()); // { value: 'blue', done: false }
	console.log(gen3.next()); // { value: 'green', done: false }
	console.log(gen3.next()); // { value: undefined, done: true }

	const myColors = [];

	// for of loops work perfectly with generator functions, iliminates the need to do .next()
	// we can use generators to iterate through any type of data structure that we want
	for (let color of colors()) {
		myColors.push(color);
	}

	console.log(myColors); // [ 'red', 'blue', 'green' ]