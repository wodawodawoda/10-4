function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
}

Phone.prototype.printInfo = function() {
	console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ' and the price is ' + this.price + '.');
}

var galaxyS6 = new Phone('Samsung', 400, 'black'),
	onePlusOne = new Phone('OnePlus', 450, 'gold'),
	iPhone6S = new Phone('Apple', 500, 'silver');

iPhone6S.printInfo();