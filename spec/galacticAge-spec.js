import Planets from './../src/galactic-age.js';

describe('Planets', function () {
  let newPlanets = new Planets (42, 80);
  it('should test if the age input is a number and also test if they have passed their expected lifespan', function () {
    expect(newPlanets.earth[0]).toEqual(42);
    expect(newPlanets.earth[1]).not.toEqual(81);
  });

  it('should return their age in Mercury years', function () {
    expect(newPlanets.mercury[0]).toEqual(175);
    expect(newPlanets.mercury[1]).toEqual(333);
  });

  it('should return their age in Venus years', function () {
    expect(newPlanets.venus[0]).not.toEqual(69);
    expect(newPlanets.venus[1]).toEqual(129);
  });

  it('should return their age in Mars years', function () {
    expect(newPlanets.mars[0]).toEqual(22);
    expect(newPlanets.mars[1]).not.toEqual(44);
  });

  it('should return their age in Jupiter years', function () {
    expect(newPlanets.jupiter[0]).not.toEqual(5);
    expect(newPlanets.jupiter[1]).not.toEqual(8);
  });
});
