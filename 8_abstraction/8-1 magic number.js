setTimeout(() => {
  scrollToTop();
}, (3 * 60 * 1000));


const DELAY_MS = 3 * 60 * 1000;
setTimeout(() => {
  scrollToTop();
}, DELAY_MS);

const PRICE = {
  MIN: 1_000_000,
  MAX: 10_000_000,
  // MIN: 1000000,
  // MAX: 10000000,
}

// min, max
// getRandomPrice(0, 10);
getRandomPrice(PRICE.MIN, PRICE.MAX);
