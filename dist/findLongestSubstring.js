"use strict";
function findLongestSubstring(str) {
    if (str.length === 0)
        return 0;
    let longest = 0;
    let left = 0;
    let right = 0;
    let newSet = new Set();
    while (right < str.length) {
        if (!newSet.has(str[right])) {
            newSet.add(str[right]);
            longest = Math.max(longest, newSet.size);
            right++;
        }
        else {
            newSet.delete(str[left]);
            left++;
        }
    }
    return longest;
}
function longestsubstring2(str) {
    let longest = 0;
    let seen = {};
    let start = 0;
    for (let index = 0; index < str.length; index++) {
        let char = str[index];
        if (seen[char]) {
            start = Math.max(start, seen[char]);
        }
        longest = Math.max(longest, index - start + 1);
        seen[char] = index + 1;
    }
    return longest;
}
console.log(longestsubstring2('rithmschool'));
console.log(longestsubstring2('thisisawesome'));
console.log(longestsubstring2('thecatinthehat'));
console.log(longestsubstring2('bbbbbb'));
console.log(longestsubstring2('longestsubstring'));
console.log(longestsubstring2('thisishowwedoit'));
//# sourceMappingURL=findLongestSubstring.js.map