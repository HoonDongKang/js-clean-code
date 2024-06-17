{
  //var -> function scope
  var global = "전역";

  if (global === "전역") {
    var global = "지역";

    console.log(global); // 지역
  }

  console.log(global); // 지역

  //let, const -> block scope
  let let_global = "전역";

  if (let_global === "전역") {
    let let_global = "지역";

    console.log(let_global); // 지역
  }

  console.log(let_global); // 전역

  let const_global = "전역";

  if (const_global === "전역") {
    let const_global = "지역";

    console.log(const_global); // 지역
  }

  console.log(const_global); // 전역
}
