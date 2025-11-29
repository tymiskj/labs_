function array() {
    const storage = [];

    const instance = function(index) {
        return storage[index];
    };

    instance.push = function(value) {
        storage.push(value);
    };

    instance.pop = function() {
        return storage.pop();
    };

    return instance;
}

const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0));
console.log(arr(1));
console.log(arr(2));

console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());