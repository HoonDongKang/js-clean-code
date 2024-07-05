const person = {
  name: "donghoon",
}

console.log(person.hasOwnProperty('name'));  // true

const foo = {
  hasOwnProperty: function () {
    return "hasOwnProperty";
  },

  bar: 'string'
}

console.log(foo.hasOwnProperty('bar'))
console.log(Object.prototype.hasOwnProperty.call(foo, 'bar'))

