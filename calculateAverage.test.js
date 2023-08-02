const calculateAverage = require('./calculateAverage');

describe('calculateAverage()', () => {
  test('returns the average of all numbers in an array', () => {
    expect(calculateAverage([1, 2, 3, 4, 5])).toBe(3);
    expect(calculateAverage([0, 2, 4])).toBe(2);
    expect(calculateAverage([13])).toBe(13);
    expect(calculateAverage([])).toBe(0);
  });
});