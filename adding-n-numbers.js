//  simple without math 
function addingNNumbers(numbers) {
  let total = 0;
  for (let index = 1; index <= numbers; index++) {
    total += index;
  }
  return total;
}
const time1= performance.now()
console.log(addingNNumbers(1000000000));
const time2= performance.now()

console.log(`Total Estimated Time : ${(time2-time1)/1000}`)


//with math 

function addingNNumberWithMath(numbers) {
    return numbers*(numbers+1)/2;
}


const timeWithMath1= performance.now()
console.log(addingNNumberWithMath(1000000000));
const timeWithMath2= performance.now()

console.log(`Total Estimated Time : ${(timeWithMath2-timeWithMath1)/1000}`)