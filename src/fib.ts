//4
//1+1 =2
//2+1=3

function fib(num:number){
    // add whatever parameters you deem necessary - good luck!  
    let n1=0;
    let n2=1;
    let nextSum=0;

    while (num>1) {
        nextSum= n1+n2;
        n1=n2;
        n2=nextSum
        num--
    }
    return nextSum

  }

//   console.log(fib(4))
//   console.log(fib(10))
//   console.log(fib(28))
//   console.log(fib(35))

//solution by clot 
  function fib2(n:number){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

console.log(fib2(4))
console.log(fib2(10))
console.log(fib2(28))
console.log(fib2(35))
