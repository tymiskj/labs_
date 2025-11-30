function unique(array) {
    return [...new Set(array)];
}

const resultUnique1 = unique([2, 1, 1, 3, 2]);
console.log(resultUnique1);

const resultUnique2 = unique(['top', 'bottom', 'top', 'left']);
console.log(resultUnique2);