"use strict";
function countUniqueValues(array) {
    array.sort();
    let first = 0;
    let second = 1;
    let unique = 0;
    while (array.length !== second) {
        if (array[first] === array[second]) {
            unique++;
            first += 2;
            second++;
        }
        else {
            unique++;
            first++;
            second++;
        }
    }
    return unique;
}
function countUniqueValues2(array) {
    if (array.length === 0)
        return 0;
    let i = 0;
    for (let index = 1; index < array.length; index++) {
        if (array[i] !== array[index]) {
            i++;
            array[i] = array[index];
        }
    }
    return i + 1;
}
console.log(countUniqueValues2([1, 2, 3, 3, 5, 5, 6, 6, 7, 7, 8, 9]));
//# sourceMappingURL=count-unique-values-in-array.js.map