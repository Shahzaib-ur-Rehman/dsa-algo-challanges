"use strict";
function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i; j++) {
            console.log(array, array[j], array[j + 1]);
            if (array[j] > array[j + 1]) {
                [[array[j], array[j + 1]]] = [[array[j + 1], array[j]]];
            }
        }
    }
    return array;
}
function bubbleSort1(array) {
    for (let i = array.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            console.log(array, array[j], array[j + 1]);
            if (array[j] > array[j + 1]) {
                [[array[j], array[j + 1]]] = [[array[j + 1], array[j]]];
            }
        }
    }
    return array;
}
function bubbleSort2(array) {
    let noSwap;
    for (let i = array.length; i > 0; i--) {
        noSwap = true;
        for (let j = 0; j < i - 1; j++) {
            console.log(array, array[j], array[j + 1]);
            if (array[j] > array[j + 1]) {
                [[array[j], array[j + 1]]] = [[array[j + 1], array[j]]];
                noSwap = false;
            }
        }
        if (noSwap)
            break;
    }
    return array;
}
console.log(bubbleSort2([37, 45, 29, 8]));
//# sourceMappingURL=bubble-sort.js.map