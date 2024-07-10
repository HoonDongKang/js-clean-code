## Semantic Element

웹 페이지의 구조에 의미를 부여하는 HTML5 태그

- 코드의 목적을 명확하게 설명하며, 개발자와 브라우저 모두에게 코드의 가독성을 향상시킴
- 태그를 통해 작성함으로써 SEO 수집에도 영향을 줄 수 있다.

## Nodelist

`Node` 문서내에 모든 객체
`Element` Tag로 둘러싸인 요소

- 배열처럼 인덱스를 사용하여 각 요소에 접근할 수 있지만 **유사 배열 구조**이기 때문에 배열 메서드 사용 불가하다.
- `for` 루프를 통해 순회 가능하다.
- `Array`로 배열 변환이 가능하다

## InnerHTML

HTML 요소의 콘텐츠를 읽거나 수정하는 데 사용되는 속성을 갖지만 오래된 기능이고 여러 위험을 갖고 있다.

- Cross-Site Scripting (XSS) 공격 : 웹 애플리케이션의 보안 취약점을 이용해 악성 스크립트를 삽입하는 공격

`innerAdjacentHTML` 로 대체 가능
선택한 요소의 특정 위치에 HTML을 삽입

- `beforebegin`: 요소 자신 바로 앞에 삽입
- `afterbegin`: 요소의 첫 번째 자식 요소 바로 앞에 삽입
- `beforeend`: 요소의 마지막 자식 요소 바로 뒤에 삽입
- `afterend`: 요소 자신 바로 뒤에 삽입

`innerText` 간단한 문자 삽입시 대체 가능

- 브라우저에 실제로 렌더링된 텍스트만 반환합니다.
- 이 또한 XSS 공격을 받을 가능성이 있기 때문에 `textContent`로 대체 가능

`textContent`

- 요소의 모든 텍스트 콘텐츠를 반환
- CSS 스타일을 무시하고, 요소의 모든 텍스트 콘텐츠를 반환

## Data Attribute

HTML 태그 내 들어가는 속성 (`id`, `class` ,,)은 자유롭게 삽입 가능 -> 가독성 저해

`data attribute`를 통해 사용자 정의 데이터를 안전하게 표준을 지키며 삽입할 수 있다.

```html
<div id="myElement" data-name="John Doe" data-age="30" data-role="admin">
  Hello, World!
</div>
```
```javascript
var element = document.getElementById('myElement');

// 데이터 속성 읽기
var name = element.dataset.name; // "John Doe"
var age = element.dataset.age;   // "30"
var role = element.dataset.role; // "admin"

// 데이터 속성 쓰기
element.dataset.name = 'Jane Smith';
element.dataset.age = '25';
element.dataset.role = 'user';
```

CSS에서도 접근가능하며 접근자에서도 사용 가능하다.
```css
div::before {
    content: attr(data-name);
}
```

## Black Box
내부 구현이 어떻게 동작할 지 예측할 수 없는 경우
- 추상화가 너무 과하게 되거나 명시적인 코드가 아닌 경우

예측할 수 없는 네이밍을 통해 해당 함수가 어떤 기능을 수행하는 지 예측할 수 없음.
- `addEventlistener`에 들어가는 이벤트명  `onClick`, `handleClick` 
- 인라인 함수 바로 작성 -> 추상화 필요