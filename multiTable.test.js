const multiTable = require('./multiTable');

describe('multiTable', () => {
  test('returns a timestable for a given integer', () => {
    expect(multiTable(1)).toBe('1 * 1 = 1\n2 * 1 = 2\n3 * 1 = 3\n4 * 1 = 4\n5 * 1 = 5\n6 * 1 = 6\n7 * 1 = 7\n8 * 1 = 8\n9 * 1 = 9\n10 * 1 = 10');
    expect(multiTable(2)).toBe('1 * 2 = 2\n2 * 2 = 4\n3 * 2 = 6\n4 * 2 = 8\n5 * 2 = 10\n6 * 2 = 12\n7 * 2 = 14\n8 * 2 = 16\n9 * 2 = 18\n10 * 2 = 20');
    expect(multiTable(3)).toBe('1 * 3 = 3\n2 * 3 = 6\n3 * 3 = 9\n4 * 3 = 12\n5 * 3 = 15\n6 * 3 = 18\n7 * 3 = 21\n8 * 3 = 24\n9 * 3 = 27\n10 * 3 = 30');
  });
});