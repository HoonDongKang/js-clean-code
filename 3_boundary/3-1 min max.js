function genRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function isAdult(age) {
  // 최소값, 최대값 포함여부 확인 필요
  // 이상, 초과 VS 이하, 미만
  if (age >= MAX_AGE) {
    return true;
  }
}

const MIN_NUMBER = 1;
const MAX_NUMBER = 45;
const MAX_AGE = 20;

genRandomNumber(MIN_NUMBER, MAX_NUMBER);
