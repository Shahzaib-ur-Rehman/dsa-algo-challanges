"use strict";
function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let minimum = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minimum]) {
                minimum = j;
            }
        }
        if (i !== minimum) {
            [[array[i]], [array[minimum]]] = [[array[minimum]], [array[i]]];
        }
    }
    return array;
}
console.log(selectionSort([5, 8, 9, 3, 7, 1, 2]));
//# sourceMappingURL=selection-sort.js.map