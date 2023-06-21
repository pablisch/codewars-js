const capitals = require('./capitals');

describe('capitals', () => {
  test('returns an array of indexes of capital letters in given string', () => {
    expect(capitals('CodEWaRs')).toEqual([0,3,4,6])
    expect(capitals('cOdEWArs')).toEqual([1,3,4,5])
  });
});