const summation = require('./summation');

describe('summation', () => {
  test('returns the sum of all numbers from 1 to num', () => {
    expect(summation(1)).toBe(1);
    expect(summation(2)).toBe(3);
    expect(summation(3)).toBe(6);
    expect(summation(4)).toBe(10);
    expect(summation(5)).toBe(15);
  });
});
