## Magic number

의미없는 숫자를 사용하는 것보다, 명시적으로 의미를 담고 있는 상수로 관리한다.

```javascript
const DELAY_MS = 3 * 60 * 1000;

setTimeout(() => {
  scrollToTop();
}, DELAY_MS);

// numeric operator
const PRICE = {
  MIN: 1_000_000,
  MAX: 10_000_000,
  // MIN: 1000000,
  // MAX: 10000000,
}
```