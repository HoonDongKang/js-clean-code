function add(num1) {
  return function (num2) {
    return function (caclulate) {
      return caclulate(num1, num2);
    }
  }
}

function sum(num1, num2) {
  return num1 + num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

const addOne = add(5)(2);

const sumAdd = add(sum);

const multiplyAdd = add(multiply);

console.log(addOne(sum)); // 7
console.log(addOne(sumAdd)); // 10
console.log(addOne(multiplyAdd)); // 7


function log(value) {
  return function (fn) {
    fn(value)
  }
}

const logFoo = log('foo');

logFoo(() => console.log('foo')); // foo

const arr = [1, 2, 3, "A", "B", "C"];

const isNumber = isTypeof('number');
const isString = isTypeof('string');

function isTypeof(type) {
  return function (value) {
    return typeof value === type;
  }
}

console.log(arr.filter(isNumber))
console.log(arr.filter(isString))

function fetcher(endPoint) {
  return async function (url, options) {
    return fetch(endPoint + url, options)
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error(res.error)
        }
      })
      .catch((err) => {
        console.error(err)
      })
  }
}
const naverApi = fetcher("https://naver.com");
const daumApi = fetcher("https://daum.net");
daumApi("/webtoon").then((res) => console.log(res))
naverApi("/news").then((res) => console.log(res))