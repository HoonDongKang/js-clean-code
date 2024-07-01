const prices = ["1000", "2000", "3000"];

const newPricesForEach = prices.forEach((price) => `${price}원`);
console.log(newPricesForEach);

const newPricesMap = prices.map((price) => `${price}원`);
console.log(newPricesMap);