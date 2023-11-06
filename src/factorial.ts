//using r
function factorial(num: number): number {
    let result:number = 1;
    if (num !== 0) { 
        result = num * factorial(--num)
    }

    return result
}


console.log(factorial(1)) // 1
console.log(factorial(2)) // 2
console.log(factorial(4)) // 24
console.log(factorial(7)) // 5040


//solution by colt
function factorial2(x:number){
    if (x < 0 ) return 0;
    if (x <= 1 ) return 1;
    return x * factorial(x-1);
 }