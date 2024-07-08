const redirectUserInfoPage = () => {}
function register() {
  const isConfirm = confirm("회원가입 성공");

  if(isConfirm){
    redirectUserInfoPage();
  }
}

function confirmModal(message, cbFunc = () => {}) {
  const isConfirm = confirm(message);
  
  if(isConfirm && cbFunc){
    cbFunc();
  }
}

function register2(){
  confirmModal("회원가입 성공", redirectUserInfoPage);
}