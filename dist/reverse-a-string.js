"use strict";
function reverse(str) {
    if (str.length == 0) {
        return '';
    }
    if (str.length === 1) {
        return str;
    }
    return `${str.charAt(str.length - 1)}${reverse(str.substring(0, str.length - 1))}`;
}
console.log(reverse('awesome'));
console.log(reverse('rithmschool'));
//# sourceMappingURL=reverse-a-string.js.map