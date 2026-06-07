const arr = [1, 2, 3, 4, 5]
console.log(arr)
console.log(arr[0]) // it will return the first element of the array

console.log(typeof arr)
console.log(arr.length)
console.log(arr.push(6))
arr.push(7)
console.log(arr) // array is mutable 
console.log(arr.pop()) // it will remove the last element of the array and return it

arr.unshift(0) // it will add an element at the beginning of the array
console.log(arr)
arr.shift()
console.log(arr) // it will remove the first element of the array and return it

