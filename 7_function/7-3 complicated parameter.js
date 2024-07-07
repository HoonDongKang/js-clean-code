function sum(sum1, sum2) {
  return sum1 + sum2;
}

function userInfo(name, { phone, email }){
  console.log(`name: ${name}, phone: ${phone}, email: ${email}`);
};

function createCar({ name, model, year }) {
  if(!name){
    throw new Error('name is required');
  }

  if(!model){
    throw new Error('model is required');
  }
}