// Using ES5 prototypal inheritance to add new methods to constructor functions
// Here we are using a contructor function to create several Car objects
function Car(options) {
	this.title = options.title;
}

// we add a method of drive by using the prototype keyword
Car.prototype.drive = function() {
	return 'vroom';
}

const car = new Car({ title: 'Focus' });
console.log(car); // Car { title: 'Focus' }
console.log(car.drive()); // vroom

// Now we want to create another contructor function that will inherit all the properties and methods from the Car constructor function
function Toyota(options) {
	Car.call(this, options);
	this.color = options.color;
}

// We need to do this in order to be able to add new prototype methods to Toyota and still be able to use the prototype property from Car 
// Old way, using ES5 syntax
// longer and more confusing
Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function() {
	return 'beep';
}

const camry = new Toyota({ color: 'red', title: 'Daily Driver'});
console.log(camry); // Toyota { color: 'red' }
// now we can call the drive() method from Car and drive() method from Toyota
console.log(camry.drive()); // vroom
console.log(camry.honk()); // beep



// ----------------- REFACTORED WITH ES6 CLASSES --------------
class Car2 {
	// this function handles initial setup for this class
	// runs whenever we use the the 'new' keyword infront of this class like so const ford = new Car2();
	// here we are using the syntax of enhanced object literals and also using object destructuring
	constructor({ title }) {
		this.title = title;
	}

	// we no longer have to use the prototype keyword to add additional methods
	drive() {
		return 'vroom vroom';
	}
}

const ford = new Car2({ title: 'Focus'});
console.log(ford); // Car2 { title: 'Focus' }
console.log(ford.drive()); // vroom vroom


// 'extends Car2' allows Toyota2 to inherit all the methods from the Car2 class
class Toyota2 extends Car2 {
	// this constructor function is called whenever a new instance of Toyota is created
	constructor(options) {
		// super() allows Toyota2 to use the constructor() method of Car 2
		// super() is acting like Car2.constructor();
		// Whatever we pass into the constructor function up above, we have to pass into super as well
		super(options);
		
		this.color = options.color;
	}

	honk() {
		// if Car2 also had a honk() method, we could write super() in here to use Car2's honk() method
		return 'beep';
	}
}

const corolla = new Toyota2({ color: 'red', title: 'Daily Driver'});
console.log(corolla); // Toyota2 { title: 'Daily Driver', color: 'red' }
console.log(corolla.honk()); // beep
// here we see that we can use Car2's drive method 
console.log(corolla.drive()); // vroom vroom