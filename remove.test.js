const remove = require('./remove');

describe('remove', () => {
  test('returns the given string with the last ! removed if present', () => {
    expect(remove('Hi!')).toBe('Hi');
    expect(remove('Hi')).toBe('Hi');
    expect(remove('!Hi')).toBe('!Hi');
    expect(remove('!Hi!')).toBe('!Hi');
    expect(remove('!Hi!!')).toBe('!Hi!');
  });
});