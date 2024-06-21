## MIN VS MAX

- 상수를 설정하여 명시적으로 `MIN_NUMBER` / `MAX_NUMBER`를 암시하자.

- 경계를 나눌 때, 포함 여부에 대해 컨벤션 필요
  - `MIN_IN_NUMBER` 포함 / `MIN_NUMBER_LIMIT` 미포함

## BEGIN VS END

- 경계를 제외하는 경우 ex) 시작을 포함하지만 끝은 포함하지 않는 경우
- 여행 일정 -> begin은 포함하지만 end는 포함하지 않는다.

## FIRST VS LAST

연속성없는 배열의 경우, `FIRST`와 `LAST`는 항상 존재

- DOM에서도 `firstChild`, `lastChild` 존재
