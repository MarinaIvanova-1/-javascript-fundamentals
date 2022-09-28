const searchCandies = require('./searchCandies.js')

describe('searchCandies', () => {
  it('finds Mars and Maltersers if the string is Ma and the price is 10', () => {
    expect(searchCandies('Ma', 10)).toEqual(['Mars', 'Maltesers']);
  });

  it('finds Mars if the string is Ma and the price is 2', () => {
    expect(searchCandies('Ma', 2)).toEqual(['Mars']);
  });

  it('finds Skitties, Skittles, Starburst if the string is S and the price is 10', () => {
    expect(searchCandies('S', 10)).toEqual(['Skitties', 'Skittles', 'Starburst']);
  });

  it('finds Skitties, Skittles if the string is S and the price is 4', () => {
    expect(searchCandies('S', 4)).toEqual(['Skitties', 'Skittles']);
  });

  it('finds Mars, Maltesers if the string is ma and the price is 10', () => {
    expect(searchCandies('ma', 10)).toEqual(['Mars', 'Maltesers']);
  });
});