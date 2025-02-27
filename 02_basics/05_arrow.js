const user = {
    username: "Yash",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username} , Welcome to our Website`);
        console.log(this)
    }
}

// user.welcomeMessage()
user.username = "Manish"
// user.welcomeMessage()

function chai(){
    let username = "Yash"
    console.log(this.username)
}
// chai()

// Arrow function

// Explicit return
const sum = (n,m) => {
    return n+m
}
// console.log(sum(2,9))

// Implicit return
const product = (a,b) => a*b
// console.log(product(7,5))

const anything = (a,b) => ({userId: "yash84"})
// console.log(anything(7,5))

const myArray = [2,4,6,7,8]