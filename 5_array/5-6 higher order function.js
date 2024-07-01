const price = ["2000", "1000", "3000", "5000", "4000"];

const suffixWon = (price) => `${price}원`;
const isOverOneThousand = (price) => Number(price) > 1000;
const ascendingList = (a, b) => a - b;

function getWonPrice(priceList) {
  const isOverList = priceList.filter(isOverOneThousand);
  const sortList = isOverList.sort(ascendingList); 
  return sortList.map(suffixWon);
}

function getWonPrice2(priceList) {
  return priceList
    .filter(isOverOneThousand)
    .sort(ascendingList)
    .map(suffixWon);
}

const result = getWonPrice(price);
const result2 = getWonPrice2(price);

console.log(result);
console.log(result2);
