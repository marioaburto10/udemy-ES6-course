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



// Ex. 2 - Iterating through generator functions
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



// Ex. 3 - A Practical Use of ES6 Generators
// Delegation of generators
// incorporating multiple generators
	const testingTeam = {
		lead: 'Amanda',
		tester: 'Bill',
		// using this key below to tell the for of loop how to iterate over testingTeam object
		// allows for custom iteration 
		// brackets are not forming an array, this is called key interpolation to dinamycally generate a key(s)
		[Symbol.iterator]: function* () {
			yield this.lead;
			yield this.tester;
		}
	}

	const engineeringTeam = {
		testingTeam,
		size: 3,
		department: 'Engineering',
		lead: 'Jill',
		manager: 'Alex',
		engineer: 'Dave',
		// using this key below to tell the for of loop how to iterate over testingTeam object
		// brackets are not forming an array, this is called key interpolation to dinamycally generate a key(s)
		// arrays have a default Symbol.iterator
		[Symbol.iterator]: function* () {
			yield this.lead;
			yield this.manager;
			yield this.engineer;
			// adding yield* lets for of loop know that there are other yields in another generator to allow complete iteration with multiple generator functions aka generator delegation
			yield* this.testingTeam;
		}
	};

	const names = [];

	// a generator function with a for of loop lets us iterate through very particular properties
	for (let name of engineeringTeam) {
		names.push(name);
	}

	console.log(names); // [ 'Jill', 'Alex', 'Dave', 'Amanda', 'Bill' ]



// Ex. 3 - Generators with recursion & tree data structures
	// based on reddit - a comment can have children comments and those children can have children comments and so on
	class Comment {
		constructor(content, children) {
			this.content = content;
			this.children = children;
		}

		// this is a class so syntax using generators will differ from objects
		// * means that it will be a generator function
		// using enhanced literal syntax and ES6 key interpolation [Symbol.iterator] as a key
		// this is used to make the iteration possible using for of loops
		*[Symbol.iterator]() {
			yield this.content;
			// for every child (or node) of this.children, go into that child and see if it is iterable, if it is, iterate through it
			for (let child of this.children) {
				yield* child;
			}
		}
	}

	const children = [
		new Comment('good comment', []),
		new Comment('bad comment', []),
		new Comment('blah', [])
	];

	// tree is the parent node with three children nodes
	const tree = new Comment('Great post', children);
	// console.log(tree); // Comment { content: 'Great post', children: [ Comment { content: 'good comment', children: [] }, Comment { content: 'bad comment', children: [] }, Comment { content: 'blah', children: [] } ] }

	const commentValues = [];

	for (let value of tree) {
		commentValues.push(value);
	}

	console.log(commentValues); // [ 'Great post', 'good comment', 'bad comment', 'blah' ]



