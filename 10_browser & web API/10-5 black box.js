const button = document.querySelector('button');

// 버튼.이벤트_등록("이벤트 타입", 리스너 실행) => 반응형으로 실행된다
button.addEventListener('click', onClick)

// onClick, handleClick 네이밍명 => 어떤 기능을 수행할 지 예측할 수 없음

const handleSearch = () => {
  //1. input
  //2. validation
  //3. submit
}

button.addEventListener("click", handleSearch);
button.addEventListener("keyup", handleSearch);
form.addEventListener("onsubmit", handleSearch);