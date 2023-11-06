
//solution  using recursion by me
//time compalixty O(n)
function power(base:number, exponent:number){
    let result =1;  
    if (exponent!==0) {
         exponent--;
        result= base * power(base, exponent)
    }
    return result
}


console.log(power(2,0)) // 1
console.log(power(2,2)) // 4
console.log(power(2,4)) // 16


//solution by colt
function power3(base:number, exponent:number){
    if(exponent === 0) return 1;
    return base * power(base,exponent-1);
}
