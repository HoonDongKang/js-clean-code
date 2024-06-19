## 스코프

모든 식별자는 자신이 선언된 위치에 의해 다른 코드가 식별자 자신을 참조할 수 있는 유효 범위가 결정된다. 즉, 스코프란 "식별자가 유효한 범위"를 의미한다.

`전역` VS `지역`

- 전역: 브라우저 환경 (window) / 노드 (global)
  - 전역변수는 어디서든 참조 가능
- 지역: 자신의 지역 스코프와 하위 지역 스코프에서만 유효

함수가 중첩되는 경우, 지역 스코프는 중첩되고 `스코프 체인`이 형성된다. 모든 스코프는 하나의 계층적 구조를 가지며, 변수 참조는 **해당 코드 스코프에서 상위 스코프로 올라가며** 검색한다.

- 즉, 상의 스코프에 선언된 변수는 하위 스코프에서 자유롭게 참조가능하지만 그 반대는 불가하다

### var / let / const

`var`는 함수 레벨 스코프이기 때문에, 함수 몸체 내부에서 선언된 변수만 지역 변수가 된다.

`let`, `const`는 블록 레벨 스코프이기 때문에, 모든 블록 몸체 내부에서 선언된 변수가 지역 변수가 된다.

### 렉시컬 스코프

```javascript
var x = 1;

function foo() {
  var x = 10;
  bar();
}

function bar() {
  console.log(x);
}

foo(); // 1
bar(); // 1
```

자바스크립트에서는 렉시컬 스코프 방식을 따른다. 즉, 함수 호출 위치와 무관하게 함수 선언 위치에 따라서 **정적으로 상위 스코프가 결정**된다.

- 즉, 함수의 상위 스코프는 항상 자신이 정의된 스코프다.

## 전역공간을 더럽히지 않기

작업 환경은 분리가 되어있더라도 런타임 환경에서 어디서든 접근할 수 있다.

-> 해결방법

1. 전역변수 대신 지역변수로 선언한다.
2. `window`, `global` 조작하지 않는다.
3. `const`, `let`을 사용한다.
4. `IIFE`, `Module`, `Closure` 스코프를 나누기

## 임시 변수를 제거하기

임시변수란 ?

특정 스코프 안에서 전역 변수처럼 활용되는 변수들

- 함수, 객체의 크기가 커질수록 내부에서 선언된 변수들 또한 전역 변수를 선언한 것처럼 위험도가 높아질 수 있다.
- 명령형으로 가득한 로직
- 어디서 어떻게 문제가 발생하였는지 디버깅하기 어려움
- 추가적인 로직을 작성하고 싶은(CRUD 조작) 유혹

```javascript
function getElements() {
  const result = {}; // 임시 객체

  result.title = document.querySelector(".title");
  result.text = document.querySelector(".text");
  result.value = document.querySelector(".value");

  return result;
}
```

해당 함수는 `result`라는 빈 객체를 생성한 후, CRUD 처리를 후 반환하는 로직을 갖는다. 하지만 추후 `result`에 새로운 값이 들어오거나 조작이되는 등, CRUD에 대한 유혹이 생기게되고 이는 다양한 side effect를 발생시킬 수 있다.

```javascript
function getElements() {
  return {
    title: document.querySelector(".title"),
    text: document.querySelector(".text"),
    value: document.querySelector(".value"),
  };
}
```

해결책

- 함수 나누기
- 바로 반환
- 고차함수(map, filter, reduce)
- 선언형 코드로 변경

## 호이스팅

런타임시, 선언이 최상단으로 끌어올려지는 것

문제점 : 코드를 작성할 때, 예측하지 못한 실행 결과가 도출된다.

해결 :

1. `var` 사용 지양
2. 함수도 호이스팅되기 때문에, 함수 표현식(변수에 함수 할당)

### var 변수 호이스팅

변수 선언문이 스코프의 선두로 끌어 올려지기 때문에, 변수 선언 전에 참조 가능

```javascript
console.log(foo); // undefined

foo = 123;

console.log(foo); // 123

var foo;

//동작 순서
var foo;

console.log(foo); //undefind

foo = 123;

console.log(foo); // 123
```

### let, const 변수 호이스팅

변수 선언은 **선언 단계**와 **초기화 단계**로 구분된다.

1. `var`는 선언 단계와 초기화 단계가 한번에 진행된다.
   - 선언 단계에서 변수 식별자를 등록하고,
   - 즉시 초기화 단계에서 `undefined`로 변수를 초기화한다.

```javascript
console.log(foo); //undefined
var foo; // 호이스팅 > 선언 > 초기화(undefined)
console.log(foo); //undefined
foo = 1; // 할당
console.log(foo); // 1
```

2. `let`, `const`은 선언 단계와 초기화 단계가 분리된다.
   - 초기화 단계 실행되기 전에 변수 접근 시, 참조 에러를 발생시킨다.
   - 선언 후, 초기화가 되기 전까지 **TDZ**에 존재한다.
   - TDZ: Temporal Dead Zone 일시적 사각지대

```javascript
{
  console.log(foo); // ReferenceError
  let foo;
}
```
