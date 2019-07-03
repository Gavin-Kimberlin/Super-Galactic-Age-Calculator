import { Planets } from './../src/galacticAge.js';

describe('Planets', function () {
  it('should test if the age input is a number and also test if they have passed their expected lifespan', function () {
    var newPlanets = new Planets (42, 80);
    expect(newAge.howOld).toEqual(42);
    expect(newAge.expectedAge).not.toEqual(81);
  });
  
  it('should return their age in Mercury years', function () {
    var newMercuryAge = new MercuryAge (42, 80);
    expect(newMercuryAge.howOld).toEqual(175)
    expect(newMercuryAge.expectedAge).toEqual(333)
  });

  it('should return their age in Venus years', function () {
    var newVenusAge = new VenusAge (42, 80);
    expect(newVenusAge.howOld).not.toEqual(69)
    expect(newVenusAge.expectedAge).toEqual(129)
  });

  it('should return their age in Mars years', function () {
    var newMarsAge = new MarsAge (42, 80);
    expect(newMarsAge.howOld).toEqual(22)
    expect(newMarsAge.expectedAge).not.toEqual(44)
  });

  it('should return their age in Jupiter years', function () {
    var newJupiterAge = new JupiterAge (42, 80);
    expect(newJupiterAge.howOld).not.toEqual(5)
    expect(newJupiterAge.expectedAge).not.toEqual(8)
  });
});
