"use strict";
function productOfArray(array) {
    let result = 1;
    if (array.length !== 0) {
        let popped = array.slice(0, -1);
        result = result * array[array.length - 1] * productOfArray(popped);
    }
    return result;
}
console.log(productOfArray([1, 2, 3]));
function productOfArray2(arr) {
    if (arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}
//# sourceMappingURL=productOfArray.js.map