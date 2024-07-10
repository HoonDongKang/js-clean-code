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
