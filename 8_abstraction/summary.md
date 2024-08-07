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

## DOM API

html, css 를 작성하여 코드의 양이 증가하게 된다면 CRUD에 대한 코드가 복잡해질 수 있다.

-> 추상화를 통해서 분리를 시켜준다.

```javascript
const createLoader = () => {
  const el = document.createElement('div');
  const el2 = document.createElement('div');
  const el3 = document.createElement('div');

  return { el, el2, el3 }
}

const createLoaderStyle = ({ el, el2, el3 }) => {
  el.setAttribute("class", "1")
  el2.setAttribute("class", "2")
  el3.setAttribute("class", "3")

  return { newEl: el, newEl2: el2, newEl3: el3 }
}

const loader = () => {
  const { el, el2, el3 } = createLoader();
  const { newEl, newEl2, newEl3 } = createLoaderStyle({ el, el2, el3 });

  newEl.appendChild(newEl2);
  newEl2.appendChild(newEl3);

  return newEl;
}
```