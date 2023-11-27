
//optimized solution
//worst case time compalixty O(n)2
//for nearly sorted data time compalixty in O()
function insertionSort(array: number[]) {
    for (let i = 1; i < array.length; i++) {
        let currentValue = array[i]
        for (var j = i - 1; j >= 0 && array[j]>currentValue; j--) {
            array[j+1]= array[j]
        }
        array[j+1]= currentValue
    }
    return array
}


console.log(insertionSort([2, 8, 4, 6, 1, 3, 5]))



/// time complaxity 
//bubble sort best O(n) average O(n)2 worst O(n)2 and space complaxity O(1)
//insertion sort best O(n) average O(n)2 worst O(n)2 and space complaxity O(1)
//Selection sort best O(n)2 average O(n)2 worst O(n)2 and space complaxity O(1)