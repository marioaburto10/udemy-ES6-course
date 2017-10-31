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
