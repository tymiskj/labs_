'use strict';

const iterate = (object, callback) => {
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      callback(key, object[key], object);
    }
  }
};

const store = (value) => {
  return () => value;
};

const contract = (fn, ...types) => {
  return (...args) => {

    const argTypes = types.slice(0, -1);
    const resultType = types[types.length - 1];

    if (args.length !== argTypes.length) {
      throw new TypeError(`Expected ${argTypes.length} arguments, got ${args.length}`);
    }

    for (let i = 0; i < args.length; i++) {
      const arg = args[i];
      const expectedType = argTypes[i];
      
      const expectedString = expectedType.name.toLowerCase();

      if (typeof arg !== expectedString) {
        throw new TypeError(`Argument ${i} expected to be ${expectedType.name}, got ${typeof arg}`);
      }
    }

    const result = fn(...args);

    const expectedResultString = resultType.name.toLowerCase();
    if (typeof result !== expectedResultString) {
      throw new TypeError(`Result expected to be ${resultType.name}, got ${typeof result}`);
    }

    return result;
  };
};


console.log('--- Testing iterate ---');
const obj = { a: 1, b: 2, c: 3 };
iterate(obj, (key, value) => {
  console.log({ key, value });
});

console.log('\n--- Testing store ---');
const read = store(5);
const value = read();
console.log(value);

console.log('\n--- Testing contract ---');

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
try {
  const res = addNumbers(2, 3);
  console.dir(res);
} catch (e) {
  console.error(e.message);
}

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
try {
  const res = concatStrings('Hello ', 'world!');
  console.dir(res);
} catch (e) {
  console.error(e.message);
}

try {
  console.log('Attempting wrong type...');
  addNumbers(2, '3'); 
} catch (e) {
  console.error('Caught expected error:', e.message);
}