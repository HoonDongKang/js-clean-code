## 함수, 메서드, 생성자

#### 함수

- 1급 객체
  - 변수나, 데이터에 담을 수 있다
  - 매개변수로 함수 전달 가능(콜백 함수)
  - 함수가 함수 반환 가능(고차 함수)

#### 함수의 this

- 함수 : global
- 메서드 : 호출된 객체
- 생성자 : 생성된 인스턴스

## argument VS parameter

`parameter`: name listed in the function's definitions (Formal Parameter)
`argument`: real values passed in the function (Actual Parameter)

## 복잡한 인자 관리하기

1. 함수의 용도에 맞춰 예측 가능한 매개변수로 네이밍하기
2. 구조분해할당을 통해 매개변수 받기
   - TIP. 첫 인자는 받고(필수), 두 번째 인자부터 구조분해할당(옵션)
3. 인자로 값이 들어오지 않았을 때, `Error`던지가 (함수 내에서 안전하게 데이터 관리)

## Default value

1. 단락 평가를 통해 값이 존재하지 않을 때 default value 설정 가능
2. 매개변수에서 default value 설정

```javascript
function createCarousel(options) {
  options = options || {};
  return options;
}

function createCarousel2({ margin = required("margin"), center = false, navElement = "div" } = {}) {
  return {
    margin,
    center,
    navElement,
  };
}

const required = (arg) => {
  throw new Error("required is " + arg);
};
```

## Rest Parameter

불특정 다수의 인수를 배열로 처리할 수 있게 해준다

```javascript
function introduce(name, age, ...hobbies) {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Hobbies: ${hobbies.join(", ")}`);
}

introduce("Alice", 30, "Reading", "Traveling", "Cooking");
// Name: Alice
// Age: 30
// Hobbies: Reading, Traveling, Cooking
```

## void, return

`void`인 함수에 대해 `return`할 필요가 없다.

JS는 아무런 `return`이 없으면 기본적으로 `undefined`를 반환한다.

## Arrow function

#### Lexical Scoping

함수가 **선언된** 위치에 따라 스코프가 결정되는 것.

#### this

- 일반 함수: **호출될 때**의 문맥에 따라 `this`가 결정된다.
- 화살표 함수: **선언될 때**의 문맥에 따라 `this`가 결정된다. 즉, 상위 스코프의 `this`를 사용한다.

```javascript
const user = {
  name: "Poco",
  getName: () => {
    return this.name; //undefined 또는 전역 객체의 name
  },
  getName2: function () {
    return this.name;
  },
};

console.log(user.getName()); // undefined
console.log(user.getName2()); // Poco
```

- `arguments`, `call`, `apply`, `bind` 와 같은 기능 사용 불가
- `New` 생성자로 사용 불가
- `this`를 가질 수 없기 때문에 클래스에서 `super`사용 불가.
- 메서드 오버라이딩 불가

```javascript
class Parent {
  greet() {
    console.log("Hello from Parent");
  }
  greet2 = () => {
    console.log("Hello from Parent");
  };
}

class Child extends Parent {
  greet() {
    // super.greet2(); // 오류
    super.greet(); // 부모 클래스의 메서드 호출
    console.log("Hello from Child");
  }
}

const child = new Child();
child.greet(); // "Hello from Parent", "Hello from Child"
```
