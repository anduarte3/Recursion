function fibsRec(n) {
    if (n == 0) return [0]
    if (n == 1) return [0,1]
    array = fibsRec(n-1)
    return [...array, array[n-1] + array[n-2]]
}

console.log(fibsRec(7))
console.log(fibsRec(3))
console.log(fibsRec(4))
console.log(fibsRec(5))
console.log(fibsRec(6))