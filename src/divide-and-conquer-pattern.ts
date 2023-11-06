//divide and Conqure pattern 
// time compalixty O(n)
function findElementInArray(array: number[], num: number): number {
    if (array.length === 0) return -1;

    let min = 0;
    let max = array.length - 1;
    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = array[middle];
        if (currentElement < num) {
            min = middle + 1
        } else if (currentElement > num) {
            max = middle - 1;
        } else {
            return middle
        }
    }
    return -1
}

console.log(findElementInArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9))