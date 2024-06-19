//PRIMITIVE
console.log(typeof "문자열"); // string
console.log(typeof true); // boolean
console.log(typeof 123); // number
console.log(typeof undefined); // undefined
console.log(typeof Symbol()); // symbol

//REFERENCE
console.log(typeof function () {}); // function
console.log(typeof class A {}); // function
console.log(typeof new String("1")); // object
console.log(typeof null); // object

const arr = [];
const func = function () {};
const date = new Date();

console.log(arr instanceof Object); // true
console.log(func instanceof Object); // true
console.log(date instanceof Object); // true

console.log(Object.prototype.toString.call(arr)); // [object Array]
console.log(Object.prototype.toString.call(func)); // [object Function]
console.log(Object.prototype.toString.call(date)); // [object Date]
