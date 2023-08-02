const trailingZeros = require('./trailingZeros');

describe('trailingZeros()', () => {
  test('returns the number with all trailing zeros removed', () => {
    expect(trailingZeros(0)).toBe(0);
    expect(trailingZeros(50)).toBe(5);
    expect(trailingZeros(100)).toBe(1);
    expect(trailingZeros(101)).toBe(101);
    expect(trailingZeros(1020000)).toBe(102);
    expect(trailingZeros(102030405)).toBe(102030405);
  });
});