const score = 100;
console.log(score);

const balance = new Number(1000)
console.log(balance)
//  #we can change it into string and use string methods on it
console.log(balance.toString())
console.log(balance.toString().length)
console.log(balance.toFixed(2))
console.log(typeof balance)

const num2 = 123.456789
console.log(num2.toPrecision(4))

const num3 = 100000
console.log(num3.toLocaleString('en-IN')) 
// 1,00,000


// math in js is a built in object that has properties and methods for mathematical constants and functions.
//  It is not a function object like Number or String, so we cannot create an instance of it
// console.log(Math)
// console.log(Math.PI)
// console.log(Math.sqrt(16))


console.log(Math.random()) // it will return a random number between 0 and 1
console.log(Math.random()*10) // here we may get a zero
console.log((Math.random()*10) +1)
const randomNum = Math.floor((Math.random()*10) +1) 
console.log(randomNum)
console.log(Math.floor((Math.random()*10) +1))
