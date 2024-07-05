class Car {
  constructor(name, brand) {
    this.name = name;
    this.brand = brand;
  }

  sayName() {
    return this.brand + ' ' + this.name;
  }
}

function Car2(name, brand) {
  this.name = name;
  this.brand = brand;
}

Car2.prototype.sayName = function () {
  return this.brand + ' ' + this.name;
}

String.prototype.welcome = function () {
  return this + ' welcome!';
}

console.log('hello'.welcome());  // hello welcome!