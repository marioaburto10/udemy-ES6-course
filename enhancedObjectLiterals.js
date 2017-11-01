// ES5 way of writing object literals
function createBookShop(inventory) {
	return {
		inventory: inventory,
		inventoryValue: function() {
			return this.inventory.reduce((total, book) => total + book.price, 0)
		},
		priceForTitle: function(title) {
			return this.inventory.find(book => book.title === title).price;
		}
	};
}

const inventory = [
	{ title: 'Harry Potter', price: 10},
	{ title: 'Eloquent Javascript', price: 15}
];

const bookShop = createBookShop(inventory);
console.log(bookShop.inventoryValue()); // 25
console.log(bookShop.priceForTitle('Harry Potter')); // 10



// ES6 way of writing objects
function createBookShop2(inventory) {
	return {
		// If the key and value are the same word, no need to write the same word twice, colon can be removed
		inventory,
		// If the key is meant to be a function, no need to use the 'function' keyword and the colon can be removed
		inventoryValue() {
			return this.inventory.reduce((total, book) => total + book.price, 0)
		},
		priceForTitle(title) {
			return this.inventory.find(book => book.title === title).price;
		}
	};
}


const bookShop2 = createBookShop2(inventory);
console.log(bookShop2.inventoryValue()); // 25
console.log(bookShop2.priceForTitle('Harry Potter')); // 10


// Ex. 1 - Multiple Properties with Enhanced Notation
// Refactor to use enhanced literal notation
const red = '#ff0000';
const blue = '#0000ff';

let COLORS = { red: red, blue: blue };

// refactored 
COLORS = {red, blue };
console.log(COLORS); // { red: '#ff0000', blue: '#0000ff' }


// Ex. 2 - Literals in Functions
// Refactor to use enhanced literal notation
let canvasDimensions = function(width, initialHeight) {
  const height = initialHeight * 9 /16;
  return { 
    width: width, 
    height: height 
  };
}

// refactored
canvasDimensions = function(width, initialHeight) {
  const height = initialHeight * 9/16;
  return { 
    width, 
    height 
  };
}


// Ex. 3 - Refactor to use enhanced literal notation
// Refactor to use enhanced literal notation
const color = 'red';

let Car = {
  color: color,
  drive: function() {
    return 'Vroom!';
  },
  getColor: function() {
    return this.color;
  }
};

// refactored
Car = {
  color,
  drive() {
    return 'Vroom!';
  },
  getColor() {
    return this.color;
  }
};