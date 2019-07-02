export default class Planets {
  constructor(age, expectedAge) {
    this.earth = [age, expectedAge];
    this.mercury = [age, expectedAge];
    this.venus = [age, expectedAge];
    this.mars = [age, expectedAge];
    this.jupiter = [age, expectedAge];
    this.mercuryLogic();
    this.venusLogic();
    this.marsLogic();
    this.jupiterLogic();
  };

  mercuryLogic() {
    this.mercury = this.mercury.map(function (mercuryAge) {
      return mercuryAge / 0.24;
    });
  };
 
  venusLogic() {
    this.venus = this.venus.map(function (venusAge) {
      return venusAge / 0.62;
    });
  };

  marsLogic() {
    this.mars = this.mars.map(function (marsAge) {
      return marsAge / 1.88;
    });
  };

  jupiterLogic() {
    this.jupiter = this.jupiter.map(function (jupiterAge) {
      return jupiterAge / 11.86;
    });
  };
};
