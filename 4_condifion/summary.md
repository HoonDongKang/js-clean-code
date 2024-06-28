## 값(value), 식(expression) 문(statment)

1. 값 : 데이터 그 자체
2. 식 : 하나의 값으로 평가될 수 있는 코드 조각
3. 문 : 프로그램에서 특정 작업을 수행

- 식은 값을 반환한다.
- 문은 특정 작업을 수행한다.
- 식은 문이 될 수 있다.

```javascript
// 5 + 3 은 식
let result = 5 + 3;
```

- 문은 식이 될 수 없다.

```javascript
//if문은 식이 될 수 없음
let x = if (y > 10) { 20 } else { 30 };
```

## 삼항연산자

- 3개의 피연산자

- `조건 ? 참(식) : 거짓(식)`

1. 조건이 많으면 `if`, 삼항연산자보다 `switch`고려
2. 코드는 가독성이 우선

```javascript
const example = condition ? a === 0 ? 'zero' : positive  : "negative";
==============================================================
const example = condition
? (a === 0 ? 'zero' : positive)
: "negative";
```

3. 값이 `nullable`한 상황에 대해 유연하게 대응하기 좋다.
4. `bad case` : 삼항연산자에 값을 반환하지 않는 함수가 들어가는 것

## Truthy Falsy

- `Truthy`
  true / {} / [] / 42 / "0" / "false" / new Date() / -42 / 12n / 3.14 / -3.14 / Infinity / -Infinity

- `Falsy`
  null / undefined / false / NaN / 0 / -0 / 0n / "" / document.all

## short-circuit evaluation

논리연산자를 활용한 단축평가 활용

```javascript
true && true && "도달O";
 참       참       참

true && false && "도달X";
 참      거짓 -> 종료

false || false || "도달O";
  거짓    거짓      참

true || true || "도달X";
  참 -> 종료

```

## else if / else 를 최대한 지양

`else if` 중첩 -> 요구사항을 명확하게 분리 X -> 가독성이 낮아짐.
`else` 사용 -> 로직이 여러개가 겹칠 경우 문제가 발생할 수 있다.

```javascript
// 20세 미만의 정보를 출력하고 "안녕하세요" 반환
function getHelloCustomer(user) {
  if (user.age < 20) {
    console.log(user);
  } else {
    //if 문에 의해 return 불가
    return "안녕하세요";
  }
}

function getHelloCustomer(user) {
  if (user.age < 20) {
    console.log(user);
  }

  return "안녕하세요";
}
```

## Early Return

1. 함수를 미리 종료
2. 사고하기 편함
3. 조건에 대한 로직의 의존성이 높아진다.

## 부정조건문

최대한 부정조건문은 지양하자

1. 해당 조건에 대해 고민을 한번 더 진행한다.
2. 프로그래밍 언어 자체로 if문이 처음부터 진행되고, true일 경우 더 아래로 가지 않아도 된다.

```javascript
X;
if (!Number.isNaN(3)) {
  console.log("숫자입니다.");
}

O;
if (isNumber(3)) {
  console.log("숫자입니다.");
}
```

그러면 언제 사용할까?

1. Early Return
2. Form Validation
3. 보안 혹은 검사하는 로직
   .

## Default Case 고려

유저한테 입력을 받거나, 매개변수를 받을 때는 항상 기본값을 생각하자

Ex) `parseInt()` 10진수를 기본값으로 설정되어 있어, 매개변수를 넣지 않아도 동작하지만 매개변수를 통해 진수값을 변환할 수 있다.

## 명시적인 연산자 사용 지향하기

1. 코드를 편하게 읽을 수 있게
2. 예측 가능한 코드를 적어 표현
3. 우선순위 연산자 사용
4. 증감 연산자, 전위 후위 연산자 사용 지양

```javascript
if (isLogin && token || user) {};
if ((isLogin && token) || user) {};

number ++
number --
number = number + 1;
number = number - 1;
```
