const arr = [1,2,3];

function operateTime(inputs, operators, is) {
  inputs[0].split("").forEach((num) =>{
    cy.get(".digit").contains(num).click()
  })
  inputs[1].split("").forEach((num) =>{
    cy.get(".digit").contains(num).click()
  })
}

function operateTime2(inputs, operators, is) {
  const [firstInput, secondInput] = inputs;
  
  firstInput.split("").forEach((num) =>{
    cy.get(".digit").contains(num).click()
  })
  secondInput.split("").forEach((num) =>{
    cy.get(".digit").contains(num).click()
  })
}

function operateTime2([firstInput,secondInput], operators, is) {
  firstInput.split("").forEach((num) =>{
    cy.get(".digit").contains(num).click()
  })
  secondInput.split("").forEach((num) =>{
    cy.get(".digit").contains(num).click()
  })
}

function clickGroupBtn(){
  const confirmBtn = document.getElementsByTagName("button")[0];
  const cancelBtn = document.getElementsByTagName("button")[1];
  const removeBtn = document.getElementsByTagName("button")[2];
}
function clickGroupBtn2(){
  const [confirmBtn, cancelBtn, removeBtn] = document.getElementsByTagName("button");
}

function formatDate(targetDate) {
  const [date] = targetDate.toISOString().split("T");

  const [year, month, day] = date.split("-");

  return `${year}년 ${month}월 ${day}일`;
}
