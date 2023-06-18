const greet = require('./greet');

describe('greet', () => {
  test('returns a set greeting "hello world!"', () => {
    expect(greet()).toBe('hello world!');
  });
});
