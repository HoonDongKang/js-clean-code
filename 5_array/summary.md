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

## 배열 요소 접근하기

- 인덱스를 통한 접근 < 구조분해 할당을 통해 접근

```javascript
function clickGroupBtn2() {
  const [confirmBtn, cancelBtn, removeBtn] = document.getElementsByTagName("button");
}

function formatDate(targetDate) {
  const [date] = targetDate.toISOString().split("T");
  const [year, month, day] = date.split("-");
  return `${year}년 ${month}월 ${day}일`;
}
```

## 유사 배열 객체

자바스크립트에서 배열은 객체이기 때문에 객체로 선언 후, `Array.from`을 통해 배열로 생성 가능하다.

```javascript
const arrayLikeObject = {
  0: "Hello",
  1: "World",
  length: 2
}

const arr = Array.from(arrayLikeObject); // [ 'Hello', 'World' ]
console.log(Array.isArray(arr));// true
```

함수에 매개변수 없이 `arguments`를 통해 값을 가져올 수 있다.
```javascript
function generatePriceList() {
  for (const item of arguments) {
    console.log(item + "원"); // 1000원, 2000원, 3000원
  }
}

generatePriceList(1000, 2000, 3000);
```

`arguments`는 유사 배열 객체이기 때문에, 배열처럼 동작하지만 Array의 메서드들을 사용할 수 없다.

## 불변성 Immutable
새로운 배열에 원본 배열을 할당하면 원본 배열이 변경될 때, 새로운 배열도 변경된다 (참조값 저장)

1. 배열을 복사한다. (복사 함수 생성)
2. 새로운 배열을 반환하는 메서드들을 활용한다. (`filter`, `spread syntax` 등등..)

## 고차함수
배열 메서드들을 활용하여 for 문과 if 문을 대체하면 가독성도 높아지고 불변성으로부터 안정성을 갖는다.

하지만 요구사항이 늘어날 수록, 복사되는 배열의 수가 점차 많아진다.

-> 배열 메서드 체이닝 활용

```javascript
function getWonPrice(priceList) {
  const isOverList = priceList.filter(isOverOneThousand);
  const sortList = isOverList.sort(ascendingList); 
  return sortList.map(suffixWon);
}

function getWonPrice2(priceList) {
  return priceList
    .filter(isOverOneThousand)
    .sort(ascendingList)
    .map(suffixWon);
}
```

## forEach VS Map

`forEach` 단순히 배열 내 요소들을 callback 함수를 실행시켜준다 (반환값 undefined)

`map` 배열 내 요소들을 callback 함수를 실행시켜준 후 반환된다.