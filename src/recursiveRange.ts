function recursiveRange(num: number): number {
    let result: number = 0;
    if (num !== 0) {
        result += num + recursiveRange(num - 1);
    }

    return result
}

// console.log(recursiveRange(6))
// console.log(recursiveRange(10))

function recursiveRange1(num: number): number {
    let result: number = 0;
    while (num !== 0) {
        result += num
        num--;
    }
    return result
}

console.log(recursiveRange1(6))
console.log(recursiveRange1(10))

//solution by clot
function recursiveRange2(x:number){
    if (x === 0 ) return 0;
    return x + recursiveRange(x-1);
 }