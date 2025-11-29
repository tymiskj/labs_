let average = (...nums) => {
  let counter = 0;
  for (let num of nums) counter += num;
  return counter / nums.length;
};

let square = (x) => x ** 2;

let cube = (x) => x ** 3;

function calculate() {
  let arr = [];
  for (let i = 0; i <= 9; i++) {
    arr.push(average(square(i), cube(i)));
  }
  return arr;
}

console.dir(calculate());