const plural = require('./plural');

describe('plural', () => {
  test('returns true for plural or false for singular', () => {
    expect(plural(1)).toBe(false)
    expect(plural(2)).toBe(true)
    expect(plural(0)).toBe(true)
    expect(plural(0.5)).toBe(true)
    expect(plural(1.5)).toBe(true)
    expect(plural(1000)).toBe(true)
  });

  test('returns true for plural or false for singular', () => {
    expect(plural(Infinity)).toBe(true)
  });
});