const ShoppingBasket = require('./shoppingBasket')

describe('shoppingBasket', () => {
  it('returns the total price of a basket', () => {
    basket = new ShoppingBasket();
    expect(basket.getTotalPrice()).toEqual(0);
  })

  it('adds a new item ot the basket', () => {
    basket = new ShoppingBasket();
    const candy = {getName: () => 'Mars', getPrice: () => 4.99};
    basket.addItem(candy);
    expect(basket.getTotalPrice()).toEqual(4.99);
  })

  it('calculates the total of a basket if a few item have been added', () => {
    basket = new ShoppingBasket();
    const candy1 = {getName: () => 'Mars', getPrice: () => 4.99};
    const candy2 = {getName: () => 'Skittle', getPrice: () => 3.99};
    basket.addItem(candy1);
    basket.addItem(candy2);
    basket.addItem(candy2);
    expect(basket.getTotalPrice()).toEqual(12.97);
  })

  it('applies discount ot the total price of a basket', () => {
    basket = new ShoppingBasket();
    const candy1 = {getName: () => 'Mars', getPrice: () => 4.99};
    const candy2 = {getName: () => 'Skittle', getPrice: () => 3.99};
    basket.addItem(candy1);
    basket.addItem(candy2);
    basket.addItem(candy2);
    basket.applyDiscount(2)
    expect(basket.getTotalPrice()).toEqual(10.97);
  })
})
