function React(){
  //생성자로 사용하길 바랄 대
  if(!new.target) {
    throw new ReferenceError("생성자입니다!!")
  }
}

React();