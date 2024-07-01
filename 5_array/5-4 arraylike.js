const arrayLikeObject = {
  0: "Hello",
  1: "World",
  length: 2
}

const arr = Array.from(arrayLikeObject); // [ 'Hello', 'World' ]

console.log(Array.isArray(arrayLikeObject)); // false

console.log(Array.isArray(arr));// true
 // true
console.log(arr.length); // 2


//매개변수를 선언하지 않아도 arguments로 받을 수 있다.
function generatePriceList() {
  for (const item of arguments) {
    console.log(item + "원"); // 1000원, 2000원, 3000원
  }
}

generatePriceList(1000, 2000, 3000);