const pipe = (...fns) => {

  fns.forEach((fn, index) => {
    if (typeof fn !== 'function') {
      throw new Error(`Argument at index ${index} is not a function: ${typeof fn}`);
    }
  });

  return (x) => fns.reduce((v, f) => f(v), x);
};

const compose = (...fns) => {
  const listeners = [];

  const composed = (initialValue) => {
    let result = initialValue;

    for (let i = fns.length - 1; i >= 0; i--) {
      try {
        result = fns[i](result);
      } catch (error) {

        listeners.forEach(listener => listener(error));
        return undefined;
      }
    }
    return result;
  };

  composed.on = (event, listener) => {
    if (event === 'error' && typeof listener === 'function') {
      listeners.push(listener);
    }
  };

  return composed;
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;
const thrower = x => { throw new Error("Boom!"); };

console.log("--- Pipe Test ---");
try {
  const f1 = pipe(inc, twice, cube);
  console.log(`Result (5 -> inc -> twice -> cube): ${f1(5)}`);

} catch (e) {
  console.error(e.message);
}

console.log("\n--- Compose Test ---");

const f2 = compose(twice, inc, cube); 

f2.on('error', (e) => console.log(`[Captured Error]: ${e.message}`));

console.log(`Success Result: ${f2(2)}`);

const fBroken = compose(twice, thrower, inc);
fBroken.on('error', (e) => console.log(`[Captured Error]: ${e.message}`));

console.log(`Broken Result: ${fBroken(5)}`);