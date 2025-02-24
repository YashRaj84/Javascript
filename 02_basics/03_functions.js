function callMyName() {
    console.log("Yash")
}
// callMyName()

function sum(n,m) {
    console.log(n+m)
}
// sum(45,98)
// sum(45,"98")
// sum(45,"m")

function addNumbers(a,b) {
    return a+b
}
const result = addNumbers(13,23)
// console.log("Sum:",result)

function loginUserMessage(username) {
    if(username == undefined) {
        console.log("Please enter an username.")
        return
    }
    return `Hello, ${username}. You are successfully logged in.`
}
// console.log(loginUserMessage("Yash Raj"))
// console.log(loginUserMessage())

function calculateCartPrice(...num) {
    return num
}
// console.log(calculateCartPrice(200,434,998))

const user = {
    username: "yash",
    age: 19
}
function handleObject(anyObj) {
    console.log(`Username is ${anyObj.username} and age is ${anyObj.age}`)
}
// handleObject(user)

//We can also pass an object directly
// handleObject({username: "Yash", age: 19})

const myArr = ["Yash Raj", 19, "LPU"]
function userDetails(anyArr) {
    console.log(`${anyArr[0]} is ${anyArr[1]} years old and is a student of ${anyArr[2]}.`)
}
userDetails(myArr)
userDetails(["Anmol Vats", 21, "Amity University"])
