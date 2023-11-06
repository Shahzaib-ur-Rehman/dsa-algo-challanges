"use strict";
function factorial(num) {
    let result = 1;
    if (num !== 0) {
        result = num * factorial(--num);
    }
    return result;
}
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(4));
console.log(factorial(7));
function factorial2(x) {
    if (x < 0)
        return 0;
    if (x <= 1)
        return 1;
    return x * factorial(x - 1);
}
//# sourceMappingURL=factorial.js.map