function getElements() {
  const result = {}; // 임시 객체

  result.title = document.querySelector(".title");
  result.text = document.querySelector(".text");
  result.value = document.querySelector(".value");

  return result;
}

function getElements_improve() {
  return {
    title: document.querySelector(".title"),
    text: document.querySelector(".text"),
    value: document.querySelector(".value"),
  };
}

function getDateTime(targetDate) {
  let month = targetDate.getMonth();
  let day = targetDate.getDate();
  let hour = targetDate.getHours();

  month = month >= 10 ? month : "0" + month;
  day = day >= 10 ? day : "0" + day;
  hour = hour >= 10 ? hour : "0" + hour;

  return {
    month,
    day,
    hour,
  };
}

function getDateTime_improve(targetDate) {
  let month = targetDate.getMonth();
  let day = targetDate.getDate();
  let hour = targetDate.getHours();

  return {
    month: month >= 10 ? month : "0" + month,
    day: day >= 10 ? day : "0" + day,
    hour: hour >= 10 ? hour : "0" + hour,
  };
}

// 최대한 추상화를 통해 임시 객체를 줄인다.
function getDateTime() {
  const currentDateTimne = getDateTime(new Date());

  return {
    month: currentDateTimne.month + "월 전",
    day: currentDateTimne.day + "일 전",
    hour: currentDateTimne.hour + "시간 전",
  };
}
