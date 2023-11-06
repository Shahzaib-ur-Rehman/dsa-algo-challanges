"use strict";
function checkStringsMethod1(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    let array1 = str1.split("");
    let array2 = str2.split("");
    for (let index = 0; index < array1.length; index++) {
        const requiredIndex = array2.findIndex((val) => val === array1[index]);
        if (requiredIndex === -1) {
            return false;
        }
        array2.splice(requiredIndex, 1);
    }
    return true;
}
function checkStringsMethod2(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    for (let index = 0; index < str1.length; index++) {
        const requiredIndex = str2.indexOf(str1[index]);
        if (requiredIndex === -1) {
            return false;
        }
        str1.slice();
    }
    return true;
}
function checkStringsMethod3(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    let frequancyCounter1 = {};
    let frequancyCounter2 = {};
    for (const val of str1) {
        frequancyCounter1[val] = (frequancyCounter1[val] || 0) + 1;
    }
    for (const val of str2) {
        frequancyCounter2[val] = (frequancyCounter2[val] || 0) + 1;
    }
    for (const key in frequancyCounter1) {
        if (!(key in frequancyCounter2)) {
            return false;
        }
        if (frequancyCounter1[key] !== frequancyCounter2[key]) {
            return false;
        }
    }
    return true;
}
console.log(checkStringsMethod3("anagram", "nagaram"));
//# sourceMappingURL=anagrams-challange.js.map