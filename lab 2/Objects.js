function fn(){
  const Alice = 'Alice';

  let Bob = 'Bob';

  console.log('userConst:', Alice);
  console.log('userBob:', Bob);
}

function createUser(name, city) {
  return { name, city };
}

console.dir(createUser('Taras Shevcheko', 'Kyiv'));
