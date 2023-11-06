"use strict";
function fib(num) {
    let n1 = 0;
    let n2 = 1;
    let nextSum = 0;
    while (num > 1) {
        nextSum = n1 + n2;
        n1 = n2;
        n2 = nextSum;
        num--;
    }
    return nextSum;
}
function fib2(n) {
    if (n <= 2)
        return 1;
    return fib(n - 1) + fib(n - 2);
}
console.log(fib2(4));
console.log(fib2(10));
console.log(fib2(28));
console.log(fib2(35));
//# sourceMappingURL=fib.js.map