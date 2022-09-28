class ShoppingBasket {
  constructor () {
    this.items = [];
    this.discount = 0
  }

  // getTotalPrice() {
  //   let sum = 0;
  //   this.items.forEach( (item) => {
  //     sum += item.getPrice()
  //   });
  //   return sum;
  // }

  addItem(item) {
    this.items.push(item);
  }

  applyDiscount(discount) {
    this.discount = discount;
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.items.forEach((candy) => {
      totalPrice += candy.getPrice();
    });

    return totalPrice - this.discount;
  }
}

module.exports = ShoppingBasket;