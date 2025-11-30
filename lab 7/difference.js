function difference(array1, array2) {
    return array1.filter(element => !array2.includes(element));
}

const diffArray1 = [7, -2, 10, 5, 0];
const diffArray2 = [0, 10];
const resultDiff1 = difference(diffArray1, diffArray2);
console.log(resultDiff1);

const diffArray3 = ['Beijing', 'Kiev'];
const diffArray4 = ['Kiev', 'London', 'Baghdad'];
const resultDiff2 = difference(diffArray3, diffArray4);
console.log(resultDiff2);