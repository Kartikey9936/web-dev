// "use strict"; 
// // standard ideal practice 
// alert()

// premitive 
// 7 types string ,number,null, Undefinded, boolean , symbol, BigInt
// Undefinded variable is defined but its value is not assigned yet
// Symbol are used to create unique identifiers for objects. They are immutable 


// const Id = Symbol('123')
// const secondId = Symbol('123')

// console.log(Id === secondId); it will return false because symbols are unique

// const bigNumber = 12345678n 
// console.log(typeof bigNumber)

// const temp = null  #null means null doesnt point to any object in memory
// console.log(typeof temp) it will return object 



// reference (nonPrimitive)
// it is called reference because it stores the reference of the object in memory and not the actual value like in case of premitive data types

// Array, Objects, Function,

// const Array = ["maths", "science", "english"] #like list in python
 
// objest is a collection of key value pairs like dictionary in python
// let myObject = {
//     name: "kartik",
//     age:19,
//     location: "India"
// }

// console.log(Array);
// console.log(myObject);




// in js we can also have function as a data type and we can store it in a variable like this

// stack(premitive) , heap(nonPremitive/refrence)
// in stack we get copy of the value and in heap we get the reference of the value

const myfunction = function(){
    console.log("hello duniya")
}
myfunction()
console.log(typeof myfunction)

// stack(premitive) , heap(nonPremitive/refrence)

let myName = "kartik"
let anotherName = myName
anotherName = "kesharwani"
console.log(myName)
console.log(anotherName)

let user1 ={
    name : "kartikey",
    age : 19,
    location : "India"
}

let user2 = user1
user1.name = "kartik"

console.log(user1)
console.log(user2)

