function seq(firstFunc) {
    const funcs = [firstFunc];

    function chain(arg) {
        if (typeof arg === 'function') {
            funcs.push(arg);
            return chain;
        } else if (typeof arg === 'number') {
            return funcs.reduceRight((acc, func) => func(acc), arg);
        }
    }

    return chain;
}

console.log(
    seq(x => x + 7)
       (x => x * 2)(5)
);

console.log(
    seq(x => x * 2)
       (x => x + 7)(5)
);

console.log(
    seq(x => x + 1)
       (x => x * 2)
       (x => x / 3)
       (x => x - 4)(7)
);