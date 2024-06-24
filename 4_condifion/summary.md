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
