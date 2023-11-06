function findLongestSubstring(str: string) {
    // add whatever parameters you deem necessary - good luck!
    if (str.length === 0) return 0
    let longest = 0;
    let left = 0;
    let right = 0;
    let newSet = new Set();
    while (right < str.length) {
        if (!newSet.has(str[right])) {
            newSet.add(str[right])
            longest = Math.max(longest, newSet.size)
            right++;
        } else {
            newSet.delete(str[left])
            left++
        }
    }
    return longest
}

// // console.log(findLongestSubstring('')) // 0
// console.log(findLongestSubstring('rithmschool')) // 7
// console.log(findLongestSubstring('thisisawesome')) // 6
// console.log(findLongestSubstring('thecatinthehat')) // 7
// console.log(findLongestSubstring('bbbbbb'))// 1
// console.log(findLongestSubstring('longestsubstring')) // 8
// console.log(findLongestSubstring('thisishowwedoit')) // 6



function longestsubstring2(str:string) {
    let longest:number=0;
    let seen:any= {};
    let start:number =0;
    for (let index = 0; index < str.length; index++) {
        let char= str[index]
        if (seen[char]) {
            start = Math.max(start, seen[char])
        }
        longest= Math.max(longest, index-start+1)
        seen[char]= index+1;
    }
    return longest
}

// console.log(findLongestSubstring('')) // 0
console.log(longestsubstring2('rithmschool')) // 7
console.log(longestsubstring2('thisisawesome')) // 6
console.log(longestsubstring2('thecatinthehat')) // 7
console.log(longestsubstring2('bbbbbb'))// 1
console.log(longestsubstring2('longestsubstring')) // 8
console.log(longestsubstring2('thisishowwedoit')) // 6