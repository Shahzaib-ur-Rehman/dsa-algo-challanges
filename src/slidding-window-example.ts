// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

//time compalixty O(n)
function maxSubarraySum(array:number[],num:number) {
    let maxSum=0;
    let tempSum=0;
    if (array.length<num) {
        return null
    }
    for (let index = 0; index < num; index++) {
        maxSum+=array[index] 
    }
    tempSum=maxSum;

    for (let index = num; index < array.length; index++) {
        tempSum = tempSum-array[index-num]+ array[index]
        maxSum = Math.max(tempSum,maxSum)
    }

    return maxSum
}

console.log(maxSubarraySum([100,200,300,400], 2)) // 700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4))  // 39 
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2) )  // 5
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)) // 5
console.log(maxSubarraySum([2,3], 3)) // null
