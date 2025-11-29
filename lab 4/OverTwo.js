function max(matrix) {
    let maxVal = -Infinity;

    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i];
        for (let j = 0; j < row.length; j++) {
            if (row[j] > maxVal) {
                maxVal = row[j];
            }
        }
    }
    return maxVal;
}

const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m);