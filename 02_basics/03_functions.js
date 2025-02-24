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
console.log(loginUserMessage("Yash Raj"))
console.log(loginUserMessage())