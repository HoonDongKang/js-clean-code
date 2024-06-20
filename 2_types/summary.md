## 타입 검사

- 자바스크립트는 동적인 타입을 갖는다 -> 타입검사가 용이하지 않음
- `typeof` `instanceof` `Object.prototype.toString.call()`

## null VS undefined

값이 없거나, 정의가 되지 않은 상태

- `null` -> 0 -> typeof Object
- `undefined` -> NaN -> typeof undefined

## Equality

Equality -> `==`
Strict Equality -> `===`

Strict Equality 는 타입 검사까지 이루어지기 때문에 eqeq를 최대한 줄이고, eqeqeq를 사용하는 것을 권장

eqeq를 사용하는 것보다 차라리 형변환을 진행 후, eqeqeq를 사용하자

## Type Casting

암묵적으로 형변환하는 방식이 많이 존재하지만, 명시적으로 형변환을 사용하면 안전하고 가독성있게 코드를 작성할 수 있다.

## isNaN

1. `isNaN` 함수:

   - `isNaN` 함수는 먼저 전달된 값을 숫자로 변환하려고 시도한다.
   - 만약 숫자로 변환하는 과정에서 NaN이 나오면 true를 반환하고, 그렇지 않으면 false를 반환한다..

   - 예를 들어, `isNaN("123테스트")`의 경우, "123테스트"를 숫자로 변환하려고 하면 변환할 수 없으므로 NaN이 되고, 따라서 isNaN("123테스트")는 true를 반환한다.

2. `Number.isNaN` 함수

   - `Number.isNaN` 함수는 전달된 값이 정확히 NaN인 경우에만 true를 반환한다.
   - 이 함수는 값을 숫자로 변환하지 않고, 단순히 값이 NaN인지 여부만 검사합니다.
   - 예를 들어,`Number.isNaN("123테스트")`의 경우, "123테스트"는 문자열이며 NaN이 아니기 때문에 false를 반환합니다.

즉, `isNaN`은 암묵적으로 매개변수를 숫자형으로 형변환을 시도하기 때문에, 명시적으로 Number가 표시된 `Number.isNaN`을 애용하자
