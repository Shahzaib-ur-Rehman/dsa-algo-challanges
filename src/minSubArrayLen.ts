function minSubArrayLen(array: number[], target: number) {
    let sum: number = 0;
    let left: number = 0;
    let right: number = 0;
    let shortest: number = Number.MAX_SAFE_INTEGER
    if (array.length===0) return 0
    while (right<array.length) {
        sum+=array[right]
        if (sum>=target) {
            while (sum>=target) {
                sum-= array[left];
                left++
            }
            shortest= Math.min(shortest, right-left+2)
            
        }
        right++;

    }
    return shortest===Number.MAX_SAFE_INTEGER ? 0: shortest
}
console.log(minSubArrayLen([2,3,1,2,4,3], 7))
console.log(minSubArrayLen([2,1,6,5,4], 9))
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52))
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39))
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55))
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11))
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95))




//solution by clot

function minSubArrayLen1(nums:number[], sum:number) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;
   
    while (start < nums.length) {
      // if current window doesn't add up to the given sum then 
          // move the window to right
      if(total < sum && end < nums.length){
        total += nums[end];
              end++;
      }
      // if current window adds up to at least the sum given then
          // we can shrink the window 
      else if(total >= sum){
        minLen = Math.min(minLen, end-start);
              total -= nums[start];
              start++;
      } 
      // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
      else {
        break;
      }
    }
   
    return minLen === Infinity ? 0 : minLen;
  }


