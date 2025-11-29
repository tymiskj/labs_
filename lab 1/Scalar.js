"use strict";

let inc = function inc (n) {
    return n+=68;
}
const a = 1;
const b = inc(a);
console.dir({a,b});

const obj = { n: 7 };
inc = function inc (num) {
    num.n++;
}
inc(obj);
console.dir(obj);