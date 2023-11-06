"use strict";
function maxSubArraySum(array, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (array.length < num)
        return null;
    for (let index = 0; index < num; index++) {
        maxSum += array[index];
    }
    tempSum = maxSum;
    for (let index = num; index < array.length; index++) {
        tempSum = tempSum - array[index - num] + array[index];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}
console.log(maxSubArraySum([1, 2, 3, 4, 5, 8, 10, 15, 25, 30, 32, 34, 36, 42], 3));
//# sourceMappingURL=sliding-window-pattern.js.map