function loginService(isLogin, user) {
  if (!isLogin) {
    if (!checkToken()) {
      if (!user.nickname) {
        return registerUser(user);
      } else {
        refreshToken();
        return "로그인 성공";
      }
    } else {
      throw new Error("No Token");
    }
  }
}

function loginService(isLogin, user) {
  // Early Return
  /**
   * 함수를 미리 종료
   * 사고하기 편함
   */
  if (isLogin) {
    return;
  }

  if (!checkToken()) {
    throw new Error("No Token");
  }

  if (!user.nickname) {
    return registerUser(user);
  }

  // 정상적인 로그인
  refreshToken();

  return "로그인 성공";
}

function checkToken() {
  return false;
}

function registerUser(user) {
  return "회원가입 성공";
}
