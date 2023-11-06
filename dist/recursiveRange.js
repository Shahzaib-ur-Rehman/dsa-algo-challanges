"use strict";
function recursiveRange(num) {
    let result = 0;
    if (num !== 0) {
        result += num + recursiveRange(num - 1);
    }
    return result;
}
function recursiveRange1(num) {
    let result = 0;
    while (num !== 0) {
        result += num;
        num--;
    }
    return result;
}
console.log(recursiveRange1(6));
console.log(recursiveRange1(10));
function recursiveRange2(x) {
    if (x === 0)
        return 0;
    return x + recursiveRange(x - 1);
}
//# sourceMappingURL=recursiveRange.js.map