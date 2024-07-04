function Person(name, age, location) {
  this.name = name;
  this.age = age;
  this.location = location;
};

const poco = new Person('John', 30, 'Seoul');

function Person2({name, age, location}) {
  this.name = name;
  this.age = age;
  this.location = location;
};

const poco2 = new Person({name: 'John', age: 30, location: 'Seoul'});

const orders = ["First", "Second", "Third"];

const [first, second, third] = orders;

console.log(first, second, third); // First Second Third

const { 0: a, 1: b, 2: c } = orders;

console.log(a, b, c); // First Second Third