export function Age(howOld, expextedAge) {
  this.howOld = howOld;
  this.expectedAge = expectedAge;
};

export function Mercury(howOld, expextedAge) {
  this.howOld = howOld;
  this.expectedAge = expectedAge;
};

export function Venus(howOld, expextedAge) {
  this.howOld = howOld;
  this.expectedAge = expectedAge;
};

export function Mars(howOld, expextedAge) {
  this.howOld = howOld;
  this.expectedAge = expectedAge;
};

export function Jupiter(howOld, expextedAge) {
  this.howOld = howOld;
  this.expectedAge = expectedAge;
};

Age.prototype = function (ageInput, expectedAgeInput) {
  this.howOld = ageInput;
  this.expectedAge = expectedAgeInput;
};

Mercury.prototype = function (ageInput, expectedAgeInput) {
  this.howOld = ageInput / 0.24;
  this.expectedAge = expectedAgeInput / 0.24;
};

Venus.prototype = function (ageInput, expectedAgeInput) {
  this.howOld = ageInput / 0.62;
  this.expectedAge = expectedAgeInput / 0.62;
};

Mars.prototype = function (ageInput, expectedAgeInput) {
  this.howOld = ageInput / 1.88;
  this.expectedAge = expectedAgeInput / 1.88;
};

Jupiter.prototype = function (ageInput, expectedAgeInput) {
  this.howOld = ageInput / 11.86;
  this.expectedAge = expectedAgeInput / 11.86;
};
