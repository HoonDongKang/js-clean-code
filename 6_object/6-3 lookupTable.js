function getUserType1(type) {
  if (type === "ADMIN") {
    return "관리자";
  }
  if (type === "INSTRUCTOR") {
    return "강사";
  }
  if (type === "STUDENT") {
    return "학생";
  }
  return "해당없음";
}

function getUserType2(type) {
  switch (type) {
    case "ADMIN":
      return "관리자";
    case "INSTRUCTOR":
      return "강사";
    case "STUDENT":
      return "학생";
    default:
      return "해당없음";
  }
}

function getUserType3(type) {
  const USER_TYPE = {
    ADMIN: "관리자",
    INSTRUCTOR: "강사",
    STUDENT: "학생",
    UNDEFINED: "해당없음"
  };
  return USER_TYPE[type] ?? USER_TYPE['UNDEFINED'];
}

function getUserType4(type) {
  return {
    ADMIN: "관리자",
    INSTRUCTOR: "강사",
    STUDENT: "학생"
  }[type] ?? "해당없음";

}

console.log(getUserType3("ADMI"));
console.log(getUserType4("ADMIN"));