const removeAnchor = require('./removeAnchor');

describe('removeAnchor', () => {
  test('returns URL with anchor removed', () => {
    expect(removeAnchor("www.codewars.com#about")).toEqual("www.codewars.com")
    expect(removeAnchor("www.codewars.com?page1#about")).toEqual("www.codewars.com?page1")
    expect(removeAnchor("www.codewars.com?page4&pageSize=10#whatever")).toEqual("www.codewars.com?page4&pageSize=10")
  })
})