
function naiveStringSearch(long:string, short:string) {
    let count:number=0
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
             if (short[j]!==long[i+j]) break;
             if (j===short.length-1)  count++;
        }
    }
    return count
}

console.log(naiveStringSearch("Hi my name is Shahaib","ah"))