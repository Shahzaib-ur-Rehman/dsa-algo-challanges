

function getDigit(num:number,i:number) {
    return Math.floor(Math.abs(num)/Math.pow(10,i))%10
}

function digitCount(num:number) {
    if (num===0) return 1;
    return Math.floor(Math.log10(Math.abs(num)))+1;
}

function mostDigits(array:number[]) {
    let maxDigits=0;
    for (let i = 0; i < array.length; i++) {
        maxDigits= Math.max(maxDigits,digitCount(array[i]))
    }
    return maxDigits;
}
// mostDigits([23,567,89,45456,90]) 


function redixSort(nums:number[]) {
    let mostDigitCount = mostDigits(nums)
    for (let i = 0; i < mostDigitCount; i++) {
        let bucket:any= Array.from({length:10}, ()=> [])
        for (let j = 0; j < nums.length; j++) {
            let value = getDigit(nums[j],i);
            bucket[value].push(nums[j])
        }
        nums= [].concat(...bucket)
    }
    return nums
}
console.log(redixSort([23,345,5467,12,2345,9852]))