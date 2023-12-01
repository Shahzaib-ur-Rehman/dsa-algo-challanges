"use strict";
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
function digitCount(num) {
    if (num === 0)
        return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}
function mostDigits(array) {
    let maxDigits = 0;
    for (let i = 0; i < array.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(array[i]));
    }
    return maxDigits;
}
function redixSort(nums) {
    let mostDigitCount = mostDigits(nums);
    for (let i = 0; i < mostDigitCount; i++) {
        let bucket = Array.from({ length: 10 }, () => []);
        for (let j = 0; j < nums.length; j++) {
            let value = getDigit(nums[j], i);
            bucket[value].push(nums[j]);
        }
        nums = [].concat(...bucket);
    }
    return nums;
}
console.log(redixSort([23, 345, 5467, 12, 2345, 9852]));
//# sourceMappingURL=redixSort.js.map