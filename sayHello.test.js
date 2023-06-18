const sayHello = require('./sayHello');

describe('sayHello', () => {
  test('returns', () => {
    expect(sayHello('Mr Spock')).toBe('Hello, Mr Spock');
    expect(sayHello('Captain Kirk')).toBe('Hello, Captain Kirk');
    expect(sayHello('Dr McCoy')).toBe('Hello, Dr McCoy');
    expect(sayHello('Lt Uhura')).toBe('Hello, Lt Uhura');
  });
});