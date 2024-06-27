function sum(x = 1, y = 1) {
  return x + y;
}

console.log(sum()); // 5

function registerDay(userInputDay) {
  switch (userInputDay) {
    case "월요일":
    case "화요일":
    case "수요일":
    case "목요일":
    case "금요일":
    case "토요일":
    case "일요일":

    default:
      return "요일을 입력하세요";
  }
}
