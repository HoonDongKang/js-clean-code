const arr = [1, 2, 3];

arr[3] = "test";
arr['property'] = "string value";
arr['obj'] = {};
arr[{}] = [1, 2, 3]
arr['func'] = function () {
  return 'hello';
}

//배열에서 함수도 동작한다.
console.log(arr['func']())

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log(arr) // [ 1, 2, 3, 'test', property: 'string value', obj: {}, '[object Object]': [ 1, 2, 3 ], func: [Function (anonymous)] ]

const obj = {
  arr : [1, 2, 3],
  property : "string value",
  obj : {},
  func : function () {
    return 'hello';
  }
}

console.log(obj) // { arr: [ 1, 2, 3 ], property: 'string value', obj: {}, func: [Function: func] }
