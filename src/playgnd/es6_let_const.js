let nameLet = 'Sairaj';
console.log('nameLet',nameLet);

const nameConst = 'raj';
console.log('nameConst',nameConst);

// let const variables cannot be redefined , var can be!
// let const are function scoped and block level scoped,
// var are only function scoped


//arrow functions === Always Anonymous!

const squared = (x) => (x * x) ;

console.log(squared(9));

 const getFirstName = (fullName) => (fullName.split(' ')[0]);

 console.log(getFirstName('Sairaj Sawnt'));

//arrow functions === no access to arguments object!

const user = {
  name: 'Sairaj',
  cities: ['Pune','Chiplun'],
  printCitiesLived() {
    //using Map
    return this.cities.map((city) => (this.name + ' has lived in ' + city));
    //using forEach
  //   this.cities.forEach((city) => {
  //     console.log(this.name + ' has lived in ' + city);
  //   });
   }
};
console.log(user.printCitiesLived());

//challenge area

const multiplier = {
  numbers: [5,6,7],
  multiplyBy: 2,
  multiply(){
    return this.numbers.map((multiplicand) => (multiplicand * this.multiplyBy));
  }

};

console.log(multiplier.multiply());
