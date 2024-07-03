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
