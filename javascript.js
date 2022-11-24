let unsortedArray = [2,14,11,7,4,16,15,9];

function mergeSort(unsortedArray) {
    const mid = parseInt(unsortedArray.length/2);
    if (unsortedArray.length < 2) {
        return unsortedArray
    }
    const leftArray = unsortedArray.splice(0, mid);
    return mergeArray(mergeSort(leftArray),mergeSort(unsortedArray))
}

function mergeArray(leftSubArray, rightSubArray) {
    let sortedArray = [];
    
    while (leftSubArray.length && rightSubArray.length) {
        if (leftSubArray[0] < rightSubArray[0]) {
            sortedArray.push(leftSubArray.shift());
        }
        else {
            sortedArray.push(rightSubArray.shift());
        }
    }
    return [...sortedArray, ...leftSubArray, ...rightSubArray]
}

document.write('Sorted Array: ', mergeSort(unsortedArray))