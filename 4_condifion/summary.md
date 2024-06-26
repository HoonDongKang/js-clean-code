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
