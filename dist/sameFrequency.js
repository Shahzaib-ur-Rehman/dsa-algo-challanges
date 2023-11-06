"use strict";
function sameFrequency(str1, str2) {
    if (str1.length !== str2.length)
        return false;
    let obj = {};
    for (let index = 0; index < str1.length; index++) {
        let val = str1[index];
        obj[val] = (obj[val] || 0) + 1;
    }
    for (let index = 0; index < str2.length; index++) {
        let val = str2[index];
        if (!(val in obj)) {
            return false;
        }
        if (obj[index] !== val) {
            return false;
        }
    }
    return true;
}
console.log(sameFrequency('182', '281'));
console.log(sameFrequency('34', '14'));
console.log(sameFrequency('3589578', '5879385'));
console.log(sameFrequency('22', '222'));
function sameFrequency2(str1, str2) {
    if (str1.length !== str2.length)
        return false;
    let lookup = {};
    for (let index = 0; index < str1.length; index++) {
        let val = str1[index];
        lookup[val] = (lookup[val] || 0) + 1;
    }
    for (let index = 0; index < str2.length; index++) {
        let val = str2[index];
        if (!lookup[val]) {
            return false;
        }
        else {
            lookup[val] -= 1;
        }
    }
    return true;
}
console.log(sameFrequency2('182', '281'));
console.log(sameFrequency2('34', '14'));
console.log(sameFrequency2('3589578', '5879385'));
console.log(sameFrequency2('22', '222'));
//# sourceMappingURL=sameFrequency.js.map