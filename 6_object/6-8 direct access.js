const model = {
  isLogin: false,
  isValidToken: false,
}

//직접 접근
function login() {
  model.isLogin = true
  model.isValidToken = true
}


function logout() {
  model.isLogin = false
  model.isValidToken = false
}

//추상화
function setLogin(boolean){
  model.isLogin = boolean
}

function setToken(boolean){
  model.isValidToken = boolean
}

//추상화된 함수를 사용
function login2(){
  setLogin(true)
  setToken(true)
}

function logout2(){
  setLogin(false)
  setToken(false)
}