const middleElement = require('./middleElement.js');

describe('middleElement', () => {
  test('return the middle element index from an array containing three numbers', () => {
    expect(middleElement([2, 1, 3])).toBe(0);
    expect(middleElement([2, 5, 3])).toBe(2);
    expect(middleElement([20, 5, 3])).toBe(1);
  })
})
