const name = "Yash"
const repoCount = 50

// console.log(name + repoCount + " Value")

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('Yash Raj')
// console.log(gameName[0])
// console.log(gameName.__proto__)
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(6))
// console.log(gameName.indexOf('R'))

const newString1 = gameName.substring(0,4)
// console.log(newString1)
const newString2 = gameName.slice(-3,8)
// console.log(newString2)

const newString3 = "   Yash Raj   "
// console.log(newString3.trim())

const url = "https://github.com/YashRaj84/Javascript"
console.log(url.replace('/', '-'))
console.log(url.includes('Yasha'))
console.log(url.split('/'))