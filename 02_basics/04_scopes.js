if(true) {
    let a = 10
    const b = 20
    var c = 30
}
var c = 309
let a = 535

// console.log(a)
// console.log(b)
// console.log(c)



function one() {
    const username = "Yash"
    function two() {
        const website = "Youtuber"
        console.log(website,username)  //global variable can be called in child function
    }
    two()
    // console.log(username)
    // two()
}
// one()

if(true) {
    const username = "Yash"
    if(username === "Yash") {
        const website = " youtuber"
        // console.log(username + website)
    }
}
// console.log(username)

console.log(addone(8))

function addone(num) {
    return num+1
}
// console.log(addone(8))

// console.log(addTwo(5))   //calling before declaration is not allowed in const type declaration

const addTwo = function(num) {
    return num + 2
}
// console.log(addTwo(5))
