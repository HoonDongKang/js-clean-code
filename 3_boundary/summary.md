## MIN VS MAX

- 상수를 설정하여 명시적으로 `MIN_NUMBER` / `MAX_NUMBER`를 암시하자.

- 경계를 나눌 때, 포함 여부에 대해 컨벤션 필요
  - `MIN_IN_NUMBER` 포함 / `MIN_NUMBER_LIMIT` 미포함

## BEGIN VS END

- 경계를 제외하는 경우 ex) 시작을 포함하지만 끝은 포함하지 않는 경우
- 여행 일정 -> begin은 포함하지만 end는 포함하지 않는다.

## FIRST VS LAST

연속성없는 배열의 경우, `FIRST`와 `LAST`는 항상 존재

- DOM에서도 `firstChild`, `lastChild` 존재

## PREFIX VS SUFFIX

- React `use` prefix는 hook을 의미
- jquery `$` prefix는 객체를 의미
- class `#` prefix는 private field를 의미

> 규칙으로서 `prefix` `suffix`는 일관성을 가져온다.

## 매개변수에서의 경계값

- 호출하는 함수의 네이밍과 인자의 순서와 연관성을 고려한다.

1. 매개변수가 2개가 넘지 않도록 한다.
2. 2개가 넘는다면 arguments, rest parmeter 사용

```javascript
function someFunc(arg1, arg2) {
  console.log(arguments[0]); //arg1
}

function someFunc(arg1, ...arg2) {
  //some func
}
```

3. 래핑하는 함수 또는 매개변수를 객체로 보낸다

```javascript
function someFunc(arg1, arg2, arg3) {}
//wrapping
function getFunc(arg1, arg3) {
  someFunc(arg1, undefined, arg3);
}
```
