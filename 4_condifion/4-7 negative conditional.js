const isCondition = true;
const isNotCondition = false;

function isNumber(num) {
  return !Number.isNaN(num) && typeof num === "number";
}

if (isNumber(3)) {
  console.log("숫자입니다.");
}

if (isCondition) {
  console.log("조건이 참입니다.");
} else {
  console.log("조건이 거짓입니다.");
}
