## `var` VS `let` / `const`

1. `var` 재선언, 재할당 가능
2. `let` 재할당 가능, 재선언 불가능
3. `const` 재할당, 재선언 불가능

`var` -> 함수 스코프
`let`, `const` -> 블록 스코프 / TDZ

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
