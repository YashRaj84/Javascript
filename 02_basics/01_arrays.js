const arr = [0,9,8,4,2,2]
// console.log(arr)

const marvelHeroes = ["IronMan", "CaptainAmerica", "Thor", "Hulk"]
const indianHeroes = ["Shaktimaan", "Krishh", "FlyingJatt"]
// console.log(heroes[3])

// Array Methods

arr.pop()
arr.push(12)
arr.shift()
arr.unshift(4)
// console.log(arr)

// console.log(arr.includes(9))
//join
//splice
//slice

// marvelHeroes.push(indianHeroes)
// console.log(marvelHeroes)
// console.log(marvelHeroes[3][1]) 
// [3] = Hulk [1] = u

const allHeroes = marvelHeroes.concat(indianHeroes)
// console.log(allHeroes)

// Or we can use spread function too
const all_heroes = [...marvelHeroes, ...indianHeroes]
// console.log(all_heroes)

const Arr = [1, 24, 6, 3, 3, [95, 40, 38, [49, 49, 32, 7]]]
// console.log(Arr.flat(3))  
//can also use 'Infinity'

// console.log(Array.from("Shaktimaan"))
// console.log(Array.from({indianHeroes: "Shaktimaan"})) // interesting

let score1 = 20
let score2 = 40
let score3 = 10
console.log(Array.of(score1,score2,score3))
