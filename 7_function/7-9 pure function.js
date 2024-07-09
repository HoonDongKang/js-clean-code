let num1 = 10;
let num2 = 20;

function impureSum1() {
  return num1 + num2;
}

function impureSum2(newNum) {
  return num1 + newNum;
}

console.log(impureSum1()); // 30

console.log(impureSum2(10)); // 20

num1 = 30;

console.log(impureSum1()); // 50

console.log(impureSum2(10)); // 40

function pureFunc(num1, num2){
  return num1 + num2;
}

function changeValue(num) {
  num ++;
  return num;
}

const obj = { one : 1 };

function changeObj(obj){
  // obj.one = 100;
  return {...obj, one: 100};
}

console.log(changeObj(obj)); // { one: 100 }

// console.log(obj); // { one: 100 }
console.log(obj); // { one: 1 }