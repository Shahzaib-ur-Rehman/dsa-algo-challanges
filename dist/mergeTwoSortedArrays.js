"use strict";
const mergeTwoSortedArrays = (array1, array2) => {
    let sortedAray = [];
    let i = 0;
    let j = 0;
    while (i < array1.length && j < array2.length) {
        if (array2[j] > array1[i]) {
            sortedAray.push(array1[i]);
            i++;
        }
        else {
            sortedAray.push(array2[j]);
            j++;
        }
    }
    while (i < array1.length) {
        sortedAray.push(array1[i]);
        i++;
    }
    while (j < array2.length) {
        sortedAray.push(array2[j]);
        j++;
    }
    return sortedAray;
};
console.log(mergeTwoSortedArrays([2, 4, 10, 50], [3, 5, 14, 99, 100]));
//# sourceMappingURL=mergeTwoSortedArrays.js.map