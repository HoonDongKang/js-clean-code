## 유효성 검사
아용자 입력 값이 유효한지 검증하는 것 

이메일의 경우
- 사용자의 입력이 이메일 포맷에 맞는지 검증하는 것
  - 서버에 요청을 보내기 전, 사전 검증을 거치며 서버 비용을 줄임.

1. 정규식
2. JavsScript 문법
3. 웹 표준 API (`input type`)

할 수 있는 모든 곳에서 유효성 검사를 다 진행하는 것이 좋다.

사용자 입력 -> 클라이언트 처리 -> 서버 처리

## try catch

예외를 처리한다.
개발자가 모든 에러를 예측하여 처리하기가 어렵고 불가능에 가깝다.
=> 예외가 예상되는 코드 혹은 발생시킬 가능성이 있는 코드에 적음으로써 예외 처리를 할 수 있다.

`catch` 절에서 단순히 `console.error(error)` 를 사용하는 것 보다
1. 개발자를 위한 예외처리
2. 사용자를 위한 예외처리
3. 사용자 사용 제안
4. 에러 로그
5. 재귀 호출
등을 넣어주는 것이 좋다.

```javascript
function util() {
  return // util code
}

function handleSubmit(input) {
  try {
    util()
  } catch (error) {
    // 1. 개발자를 위한 예외처리 
    console.error(error)

    // 2. 사용자를 위한 예외처리
    alert('문제가 발생했습니다. 관리자에게 문의해주세요.');
    //toast, modal, snackbar 등을 사용하여 사용자에게 알림

    //3. 사용자에게 사용을 제안
    history.back();
    history.go("안전한 어딘가로 이동");
    clear();
    Element.focus();

    //4. 에러 로그 수집 
    sentry.log();
    // 특정 도구를 통해 에러 로그를 수집

    //5. 비추천하지만 필요에 따라 사용되는 경우
    handleSubmit();
  } finally {
    // 데이터 분석을 위한 로그
  }
}

```