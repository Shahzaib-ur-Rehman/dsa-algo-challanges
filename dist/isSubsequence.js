"use strict";
function isSubsequence(str1, str2) {
    let first = 0;
    for (let index = 0; index < str2.length; index++) {
        if (str1[first] === str2[index]) {
            first++;
        }
    }
    if (first === str1.length) {
        return true;
    }
    return false;
}
console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'sting'));
console.log(isSubsequence('abc', 'abracadabra'));
console.log(isSubsequence('abc', 'acb'));
function isSubsequence1(str1, str2) {
    var i = 0;
    var j = 0;
    if (!str1)
        return true;
    while (j < str2.length) {
        if (str2[j] === str1[i])
            i++;
        if (i === str1.length)
            return true;
        j++;
    }
    return false;
}
function isSubsequence2(str1, str2) {
    if (str1.length === 0)
        return true;
    if (str2.length === 0)
        return false;
    if (str2[0] === str1[0])
        return isSubsequence2(str1.slice(1), str2.slice(1));
    return isSubsequence2(str1, str2.slice(1));
}
//# sourceMappingURL=isSubsequence.js.map