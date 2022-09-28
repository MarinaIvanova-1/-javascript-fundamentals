const fizzBuzz = require('./fizzBuzz.js')

// describe('fizzBuzz', (), => {
//   it('returns fizz if z number is divisable by 3', (), => {
//     expect(fizzBuzz(3)).toBe('fizz');
//   });
// });

describe('fizzBuzz', () => {
  it('returns Fizz if a number is divisable by 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });

  it('returns Buzz if a number is divisable by 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  });

  it ('returns 8 if a number is 8', () => {
    expect(fizzBuzz(8)).toBe(8);
  });

  it('returns FizzBuzz is a number is divisable by both 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });

  it('returns Fizz if a number is divisable by 3', () => {
    expect(fizzBuzz(18)).toBe('Fizz');
  });

  it ('returns Buzz is a number is divisable by 5', () => {
    expect (fizzBuzz(20)).toBe ('Buzz');
  });
});

