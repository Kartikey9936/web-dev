const name = "kartik"
const repocount = 1000

console.log(`hello my name is ${name} and repocount is ${repocount}`)

const gameName = new String('string')
gameName

console.log(gameName[0])
console.log(gameName[1])
console.log(gameName.charAt(0))
console.log(gameName.length)
console.log(gameName.indexOf('g'))

const newString = gameName.substring(0,3)
console.log(newString)

const anotherString = gameName.slice(-5,3) 
// # slice can also take negative index and it will start from the end of the string
console.log(anotherString)

const newString2 = "  kartik  "
console.log(newString2)
console.log(newString2.trim())