"use strict";
function findSamePairOfDifferentSymbol(array) {
    let first = 0;
    let second = array.length - 1;
    while (first < second) {
        let sum = array[first] + array[second];
        if (sum === 0) {
            return [array[first], array[second]];
        }
        else if (sum > 0) {
            second--;
        }
        else {
            first++;
        }
    }
    return [];
}
console.log(findSamePairOfDifferentSymbol([-4, -3, -2, -1, 0, 1, 3, 5, 6]));
//# sourceMappingURL=multiple-pointer-challange.js.map