let range = (start, end) => {
  let arr = [];
  for (let i = start; i <= end; i++) arr.push(i);
  return arr;
};

console.dir(range(15, 30));

let rangeOdd = (start, end) => {
  let arr = [];
  for (let i = start; i <= end; i++) if (i % 2) arr.push(i);
  return arr;
};

console.dir(rangeOdd(15, 30));