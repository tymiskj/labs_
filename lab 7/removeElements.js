function removeElements(array, ...items) {
    items.forEach(item => {
        const index = array.indexOf(item);
        if (index > -1) {
            array.splice(index, 1);
        }
    });
}

const array3 = [1, 2, 3, 4, 5, 6, 7];
removeElements(array3, 5, 1, 6);
console.log(array3);

const array4 = ['Kiev', 'Beijing', 'Lima', 'London'];
removeElements(array4, 'Lima', 'Berlin', 'Kiev');
console.log(array4);