## Shorthand Property, Concise Method

ES2015+부터 등장한 기술들

- `Shorthand Property` = 프로퍼티의 key와 value가 동일할 경우, value 생략 가능
- `Concise Method` = 객체의 메서드로, 메서드 축약형으로 메서드 사용

## Computed Property

객체의 `property key` 값을 동적으로 정의할 수 있게 해준는 기능

```javascript
function createObject(propName, propValue) {
  return {
    [propName]: propValue,
  };
}

let obj1 = createObject("brand", "Toyota");
let obj2 = createObject("model", "Camry");

console.log(obj1); // { brand: "Toyota" }
console.log(obj2); // { model: "Camry" }
```

- 대괄호 안에 표현식을 사용하여 동적으로 객체의 속성 이름 부여
- 문자열, 숫자, 변수, 표현식을 통해 속성 이름 부여 가능

## Lookup Table

`if-else`, `switch` 문을 통해 분기처리를 해도 요구사항들이 늘어나다보면 조건문의 길이가 길어짐

```javascript
function getUserType3(type) {
  const USER_TYPE = {
    ADMIN: "관리자",
    INSTRUCTOR: "강사",
    STUDENT: "학생",
    UNDEFINED: "해당없음",
  };
  return USER_TYPE[type] ?? USER_TYPE["UNDEFINED"];
}
```

Lookup Table을 사용하면 상수로 관리하기 편하고, 가독성도 높여준다.

## Destructuring

- 매개변수에 객체 형태의 Destructuring 처리 시, 순서 없이 입력 가능.
- 객체 또는 배열로부터 명시적으로 변수를 할당받을 수 있음.

## Object.freeze

객체를 동결시키면 변경 불가능

얕은 복사에 대해서는 변경을 방지할 수 있지만, 깊은 복사에 대해서는 변경을 막지 못한다.

=> 깊은 복사 변경 불가

1. 대중적인 유틸 라이브러리(lodash)
2. 유틸 함수 작성

```javascript
function deepFreeze(obj) {
  //객체 순회
  Object.keys(obj).forEach((key) => {
    //객체 확인
    const value = obj[key];
    //재귀를 통한 freeze
    if (typeof value === "object" && value !== null) {
      deepFreeze(value);
    }
  });
  //그 외 freeze
  return Object.freeze(obj);
}
```

## Prototype 조작 지양

```javascript
String.prototype.welcome = function () {
  return this + " welcome!";
};

console.log("hello".welcome()); // hello welcome!
```

JS 에 내장된 메서드들을 prototype을 통해 조작하기 보다

해당 메서드들을 통해 새로운 메서드를 구현하는 것을 지향해야한다.

- prototype 조작은 결국 사용되는 해당 prototype에 자신의 코드가 포함되는 것

## hasOwnProperty

자바스크립트는 `hasOwnProperty`를 보호하지 않는다.

객체 내부에 `hasOwnProperty`라는 key의 메서드를 만들 경우, prototype의 `hasOwnProperty` 처럼 동작 X

```javascript
const foo = {
  hasOwnProperty: function () {
    return "hasOwnProperty";
  },

  bar: "string",
};

console.log(foo.hasOwnProperty("bar")); //hasOwnProperty
console.log(Object.prototype.hasOwnProperty.call(foo, "bar")); //true
```

## 직접 접근 지양

안정적으로 데이터를 다루기 위해서 직접 접근 < 레이어 분리

예측 가능한 코드를 작성하여 흐름을 예측할 수 있게 작성해야 한다.
```
모델 -> 직접 접근 -> 데이터 변경
-------------------------------------------------
모델 -> 추사화된 함수(get, set) -> 함수를 이용한 데이터 변경
```

## Optional Chaining ?.

객체 체인을 통한 접근 시, 런타임 환경에서 조회를 해오지 못할 수 있다.

Optional Chaining을 통해 선택적으로 체이닝을 활용할 수 있다