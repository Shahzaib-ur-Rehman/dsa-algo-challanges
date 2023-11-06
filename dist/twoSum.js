"use strict";
function twoSum(nums, target) {
    let first = 0;
    let second = 1;
    while (second < nums.length) {
        let sum = nums[first] + nums[second];
        if (sum === target) {
            return [nums[first], nums[second]];
        }
        if (sum > target) {
            second++;
        }
        else {
            first++;
        }
    }
}
console.log(twoSum([2, 11, 7, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
//# sourceMappingURL=twoSum.js.map