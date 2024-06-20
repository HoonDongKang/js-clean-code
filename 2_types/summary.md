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
