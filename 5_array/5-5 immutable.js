const originArr = ["123", "456", "789"];

const newArray = originArr;
const newArray2 = [...originArr];

originArr.push(10);
originArr.push(11);
originArr.push(12);
originArr.push(0);

console.log(newArray); // ["123", "456", "789", 10, 11, 12, 0]
console.log(newArray2); // ["123", "456", "789"]