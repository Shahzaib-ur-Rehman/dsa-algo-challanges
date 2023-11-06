
//my solution 
//time compalixty O(n)
function areThereDuplicates(...args: any) {
    // good luck. (supply any arguments you deem necessary.)
    let lookup: any = {}
    for (let index = 0; index < args.length; index++) {
        let value = args[index];
        lookup[value] = (lookup[value] || 0) + 1;
    }
    console.log(lookup)
    for (const key in lookup) {
        if (lookup[key]!==1) {
            return true
        }
    }
    return false
}

console.log(areThereDuplicates(1, 2, 3))
console.log(areThereDuplicates(1, 2, 2))
console.log(areThereDuplicates('a', 'b', 'c', 'a'))


// solution provided by colt 
//time compalixty O(n log n)
function areThereDuplicates2(...args:any) {
    args.sort((a:any,b:any)=>{
        if(a<b) return -1;
        if(a>b) return 1;
        return 0;
    })
    let start =0;
    let next =1;
    while (next<args.length) {
        if (args[start]===args[next]) {
            return true
        }
        start++;
        next++;
    }
    return false
}

console.log(areThereDuplicates2(1, 2, 3))
console.log(areThereDuplicates2(1, 2, 2))
console.log(areThereDuplicates2('a', 'b', 'c', 'a'))