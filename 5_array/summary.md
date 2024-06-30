## JS에서의 배열은 객체다.

자바스크립트에서 배열은 객체다.

- 배열 내부에 원시값 뿐만 아니라 함수, 객체 다 포함될 수 있으며 동작한다.
  `array`인지 확인 -> `Array.isArray` 사용

## Array.length

`Array.length`는 길이를 의미하기 보단, 배열의 마지막 인덱스 값을 보여주는 것에 더 가깝다.

```javascript
const arr = [1, 2, 3];
arr[3] = 4;
console.log(arr.length); //4
arr[9] = 10;
console.log(arr); //[ 1, 2, 3, 4, <5 empty items>, 10 ]
```
