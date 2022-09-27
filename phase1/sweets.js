class Candy {
  constructor(name, price) {
    this.name = name;
    this.price = price
  }

  getName() {
    return  this.name;
  }

  getPrice() {
    return this.price;
  }

}

class ShoppingBasket {
  constructor() {
    this.items = []
  }

  getTotalPrice() {
    let sum = 0;
    this.items.forEach((item) => sum += item.getPrice());
    return sum;
  }

  addItem(item) {
    this.items.push(item);
  }
}
// const candy = new Candy('Mars', 4.99);
// const basket = new ShoppingBasket();


module.exports = {
  Candy,
  ShoppingBasket,
};

