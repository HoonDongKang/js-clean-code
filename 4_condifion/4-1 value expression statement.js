// 값에 문이 들어감
// const obj = {id: if(condition) { 'msg' }}

// 값에는 식이 들어가도 된다.
const obj2 = { id: condition ? "msg" : null };

// 즉시 실행 함수 사용 시, 값으로 사용 가능
const obj3 = {
  id: (() => {
    if (condition) {
      return "msg";
    }
  })(),
};
