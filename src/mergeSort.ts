

const merge = (arr1: number[], arr2: number[]) => {
    let left = 0;
    let right = 0;
    let result = []
    while (left < arr1.length && right < arr2.length) {
        if (arr1[left]<arr2[right]) {
            result.push(arr1[left])
            left++;
        }else{
            result.push(arr2[right])
            right++;
        }
    }

    while (left <arr1.length) {
        result.push(arr1[left])
        left++;
    }

    while(right< arr2.length){
        result.push(arr2[right])
        right++
    }

    return result

}


const mergeSort = (array:number[]) =>{
    if (array.length<=1) return array
    let mid = Math.floor(array.length/2)
    let left = mergeSort(array.slice(0,mid)) as [];
    let right = mergeSort(array.slice(mid)) as []
    return merge(left,right)
}

console.log(mergeSort([4,2,9,8,6,7,3,10]))