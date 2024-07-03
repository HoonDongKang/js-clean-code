const funcName = 'func0';
const funcName1 = 'func1';
const funcName2 = 'func2';

const obj = {
  [funcName]() {
    return 'func0';
  }, 
  [funcName1]() {
    return 'func1'
  },
  [funcName2]() {
    return 'func2'
  }
}

for(let i = 0; i < 3; i++) {
  console.log(obj[`func${i}`]());
}

console.log(obj[funcName]());