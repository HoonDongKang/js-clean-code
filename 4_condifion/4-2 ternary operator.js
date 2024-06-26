function example1() {
  return condition1 ? value1 : condition2 ? value2 : condition3 ? value3 : value4;
}

function example2() {
  if (condition1) {
    return value1;
  } else if (condition2) {
    return value2;
  } else if (condition3) {
    return value3;
  } else {
    return value4;
  }
}

function example3() {
  switch (key) {
    case condition1:
      return value1;
    case condition2:
      return value2;
    case condition3:
      return value3;
    default:
      return value4;
  }
}

const example = condition ? (a === 0 ? "zero" : positive) : "negative";

const welcomeMessage = (isLogin) => {
  const name = isLogin ? getName() : "이름없음";

  return `안녕하세요 ${name}님`;
};

function alertMessage(isAdult) {
  isAdult
    ? alert("입장이 가능합니다.") // undefined
    : alert("입장이 불가합니다."); // undefined
}
