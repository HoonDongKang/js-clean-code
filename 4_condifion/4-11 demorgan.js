const isValidUser = false;
const isValidToken = true;

if (isValidUser && isValidToken) {
  console.log("로그인 성공!");
}

if (!(isValidUser && isValidToken)) {
  console.log("로그인 실패!");
}
if (!isValidUser || !isValidToken) {
  console.log("로그인 실패!");
}

const isMale = false;
const isFemale = true;

if(!(isMale || isFemale)) {
  console.log("인증 실패")
}
if(!isMale && !isFemale) {
  console.log("인증 실패")
}

if(!(true || true) === false){
  console.log("인증 실패")
}

if((!true && !true) === false){
  console.log("인증 실패")
}