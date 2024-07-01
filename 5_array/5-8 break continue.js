const orders = ['first', 'second', 'third'];

for (let i = 0; i < orders.length; i++) {
  const order = orders[i];

  if (order === 'second') {
    // continue;
    break;
  }

  console.log(order);
}

orders.forEach((order) => {
  if (order === 'second') {
    // continue;
    return;
  }

  console.log(order);
});