const arr = [1,2,3];

console.log(arr.length); // 3

arr.length = 10;

console.log(arr); // [ 1, 2, 3, <7 empty items> ]

arr.length > 10 & arr.map((el) => <Some>{el}</Some>)

const arr = [1, 2, 3];
arr[3] = 4;
console.log(arr.length); //4
arr[9] = 10;
console.log(arr); //[ 1, 2, 3, 4, <5 empty items>, 10 ]


Array.prototype.clear = function () {
  this.length = 0;
}

function clearArray(array) {
  array.length = 0 ;
  return array;
}

const arr = [1,2,3];
console.log(clearArray(arr)); // []