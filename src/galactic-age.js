export default class Planets {
  constructor(age, expectedAge) {
    this.earth = [age, expectedAge];
    this.mercury = [age, expectedAge];
    this.venus = [age, expectedAge];
    this.mars = [age, expectedAge];
    this.jupiter = [age, expectedAge];
    this.mercuryLogic();
  };
  mercuryLogic() {
    this.mercury = this.mercury.map(function (mercuryAge) {
      return mercuryAge / 0.24;
    });
  }
  venusLogic() {
    this.venus /= 0.62;
  }
};

// Age.prototype = function (ageInput, expectedAgeInput) {
//   this.howOld = ageInput;
//   this.expectedAge = expectedAgeInput;
// };
//
// Mercury.prototype = function (ageInput, expectedAgeInput) {
//   this.howOld = ageInput / 0.24;
//   this.expectedAge = expectedAgeInput / 0.24;
// };
//
// Venus.prototype = function (ageInput, expectedAgeInput) {
//   this.howOld = ageInput / 0.62;
//   this.expectedAge = expectedAgeInput / 0.62;
// };
//
// Mars.prototype = function (ageInput, expectedAgeInput) {
//   this.howOld = ageInput / 1.88;
//   this.expectedAge = expectedAgeInput / 1.88;
// };
//
// Jupiter.prototype = function (ageInput, expectedAgeInput) {
//   this.howOld = ageInput / 11.86;
//   this.expectedAge = expectedAgeInput / 11.86;
// };
