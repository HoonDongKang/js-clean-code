var global = 0;

function outer() {
  //global; // undefined
  console.log(global); // undefined <- 호이스팅으로 인한 undefined
  //global = 5;
  var global = 5;

  function inner() {
    var global = 10;

    console.log(global); // 10
  }

  inner();

  global = 1;
  console.log(global); // 1
}

outer();

function duplicateVar() {
  var a;

  console.log(a);

  var a = 10;

  console.log(a);
}

console.log(duplicateVar());

var sum;

console.log(sum);

function sum() {
  return 1 + 2;
}
function sum() {
  return 1 + 2 + 3;
}
function sum() {
  return 1 + 2 + 3 + 4;
}
