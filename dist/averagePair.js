"use strict";
function averagePair(array, num) {
    if (array.length == 0)
        return false;
    let first = 0;
    let second = array.length - 1;
    while (first < second) {
        let avg = (array[first] + array[second]) / 2;
        if (avg === num) {
            return true;
        }
        else if (avg > num) {
            second--;
        }
        else {
            first++;
        }
    }
    return false;
}
console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
console.log(averagePair([], 4));
function averagePair1(arr, num) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let avg = (arr[start] + arr[end]) / 2;
        if (avg === num)
            return true;
        else if (avg < num)
            start++;
        else
            end--;
    }
    return false;
}
//# sourceMappingURL=averagePair.js.map