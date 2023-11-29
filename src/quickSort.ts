function swap(array: number[], i: number, j: number) {
    [array[i], array[j]] = [array[j], array[i]]
}


function pivot(array: number[], start: number = 0, end: number = array.length = 1): number {
    let pivotPoint = array[start]
    let swapIndex = start
    for (let i = start + 1; i < array.length; i++) {
        if (pivotPoint > array[i]) {
            swapIndex++;
            swap(array, swapIndex, i)
        }
    }
    swap(array, start, swapIndex)
    return swapIndex
}


function quickSort(array: number[], left: number = 0, right: number = array.length): number[] {
    if (left < right) {
        let pivotIndex = pivot(array, left, right)
        quickSort(array, left, pivotIndex - 1)
        quickSort(array, pivotIndex + 1, right)
    }
    return array
}


console.log(quickSort([2, 8, 1, 3, 6, 7, 5, 4]))
console.log(quickSort([40, 60, 1, 200, 9, 83, 17]))