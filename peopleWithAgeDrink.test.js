const peopleWithAgeDrink = require('./peopleWithAgeDrink');

describe('peopleWithAgeDrink', () => {
  test('returns the drink that a person should drink at a given age', () => {
    expect(peopleWithAgeDrink(1)).toBe('drink toddy');
    expect(peopleWithAgeDrink(13)).toBe('drink toddy');
    expect(peopleWithAgeDrink(14)).toBe('drink coke');
    expect(peopleWithAgeDrink(17)).toBe('drink coke');
    expect(peopleWithAgeDrink(18)).toBe('drink beer');
    expect(peopleWithAgeDrink(20)).toBe('drink beer');
    expect(peopleWithAgeDrink(21)).toBe('drink whisky');
    expect(peopleWithAgeDrink(50)).toBe('drink whisky');
  });
});