function sumFor(...args) {
    let result = 0;
    for (let i = 0; i < args.length; i++) {
        result += args[i];
    }
    return result;
}

function sumForOf(...args) {
    let result = 0;
    for (const num of args) {
        result += num;
    }
    return result;
}

function sumWhile(...args) {
    let result = 0;
    let i = 0;
    while (i < args.length) {
        result += args[i];
        i++;
    }
    return result;
}

function sumDoWhile(...args) {
    if (args.length === 0) return 0;
    let result = 0;
    let i = 0;
    do {
        result += args[i];
        i++;
    } while (i < args.length);
    return result;
}

function sumReduce(...args) {
    return args.reduce((acc, current) => acc + current, 0);
}

const sum = sumReduce;
console.log(sum(1, 2, 3));
console.log(sum(0));
console.log(sum());
console.log(sum(1, -1, 1));
console.log(sum(10, -1, -1, -1));