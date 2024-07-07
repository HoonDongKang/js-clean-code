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
  return options
}

function createCarousel2({ 
  margin= required("margin"), 
  center= false, 
  navElement= 'div'
  } = {}) {
  return {
    margin, center, navElement
  }
}

const required = (arg) => {
  throw new Error("required is " + arg);
}
```

## Rest Parameter

불특정 다수의 인수를 배열로 처리할 수 있게 해준다
```javascript
function introduce(name, age, ...hobbies) {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Hobbies: ${hobbies.join(', ')}`);
}

introduce('Alice', 30, 'Reading', 'Traveling', 'Cooking');
// Name: Alice
// Age: 30
// Hobbies: Reading, Traveling, Cooking

```