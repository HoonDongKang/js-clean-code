const x = 1;

if (x >= 0) {
  console.log("x는 0보다 크거나 같습니다.");
} else if (x > 0) {
  console.log("x는 1보다 크거나 같습니다.");
}
if (x >= 0) {
  console.log("x는 0과 크거나 같습니다.");
} else {
  if (x > 0) {
    console.log("x는 0보다 큽니다.");
  }
}

function getActiveUserName(user) {
  if (user.name) {
    return user.name;
  }

  return "이름 없음";
}

function getHelloCustomer(user) {
  if (user.age < 20) {
    console.log(user);
  } else {
    return "안녕하세요";
  }
}

function getHelloCustomer() {
  return "안녕하세요";
}
