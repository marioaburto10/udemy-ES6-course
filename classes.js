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


