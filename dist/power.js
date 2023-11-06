"use strict";
function power(base, exponent) {
    let result = 1;
    if (exponent !== 0) {
        exponent--;
        result = base * power(base, exponent);
    }
    return result;
}
console.log(power(2, 0));
console.log(power(2, 2));
console.log(power(2, 4));
function power3(base, exponent) {
    if (exponent === 0)
        return 1;
    return base * power(base, exponent - 1);
}
//# sourceMappingURL=power.js.map