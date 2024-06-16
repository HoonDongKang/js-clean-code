{
  // var 재할당, 재선언 가능
  var name = "name";
  console.log(name); // name

  var name = "name2";
  console.log(name); // name2

  var name = "name3";
  console.log(name); // name3

  // let 재할당 가능, 재선언 불가능
  let let_name = "let_name";
  console.log(let_name); // let_name

  let_name = "let_name2";
  console.log(let_name); // let_name2

  // const 재할당, 재선언 불가능
  const const_name = "const_name";
  console.log(const_name); // const_name
}
