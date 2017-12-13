'use strict';

var nameLet = 'Sairaj';
console.log('nameLet', nameLet);

var nameConst = 'raj';
console.log('nameConst', nameConst);

// let const variables cannot be redefined , var can be!
// let const are function scoped and block level scoped,
// var are only function scoped


//arrow functions === Always Anonymous!

var squared = function squared(x) {
  return x * x;
};

console.log(squared(9));

var getFirstName = function getFirstName(fullName) {
  return fullName.split(' ')[0];
};

console.log(getFirstName('Sairaj Sawnt'));

//arrow functions === no access to arguments object!

var user = {
  name: 'Sairaj',
  cities: ['Pune', 'Chiplun'],
  printCitiesLived: function printCitiesLived() {
    var _this = this;

    //using Map
    return this.cities.map(function (city) {
      return _this.name + ' has lived in ' + city;
    });
    //using forEach
    //   this.cities.forEach((city) => {
    //     console.log(this.name + ' has lived in ' + city);
    //   });
  }
};
console.log(user.printCitiesLived());

//challenge area

var multiplier = {
  numbers: [5, 6, 7],
  multiplyBy: 2,
  multiply: function multiply() {
    var _this2 = this;

    return this.numbers.map(function (multiplicand) {
      return multiplicand * _this2.multiplyBy;
    });
  }
};

console.log(multiplier.multiply());
