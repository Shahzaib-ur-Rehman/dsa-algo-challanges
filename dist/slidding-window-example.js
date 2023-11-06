"use strict";
function maxSubarraySum(array, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (array.length < num) {
        return null;
    }
    for (let index = 0; index < num; index++) {
        maxSum += array[index];
    }
    tempSum = maxSum;
    for (let index = num; index < array.length; index++) {
        tempSum = tempSum - array[index - num] + array[index];
        maxSum = Math.max(tempSum, maxSum);
    }
    return maxSum;
}
console.log(maxSubarraySum([100, 200, 300, 400], 2));
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));
console.log(maxSubarraySum([2, 3], 3));
//# sourceMappingURL=slidding-window-example.js.map