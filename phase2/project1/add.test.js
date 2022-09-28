const add = require('./add.js');
const multiply = require('./multiply.js');

describe('add', () => {
  it('adds 2 and 2', () => {
    expect(add(2,2)).toBe(4);
  });
});

describe('add', () => {
  it('adds 4 and 5', () => {
    expect(add(4,5)).toBe(9);
  });
});

describe('multiply', () => {
  it('multiplies 3 and 4', () => {
    expect(multiply(3,4)).toBe(12);
  });
});