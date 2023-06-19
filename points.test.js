const points = require('./points');

describe('points', () => {
  test('returns the total number of points from a collection of results array', () => {
    expect(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"])).toBe(30)
    expect(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"])).toBe(10)
    expect(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"])).toBe(0)
    expect(points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"])).toBe(15)
    expect(points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"])).toBe(12)
  });
});