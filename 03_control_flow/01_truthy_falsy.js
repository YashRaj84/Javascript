// const userEmail = "yash2698@gmail.com"
// const userEmail = ""
const userEmail = []
if(userEmail) {
    // console.log("Got the email")
}
else {
    // console.log("Don't have an email")
}

// falsy values => false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values => "0", "false", " ", [], {}, function(){}

if(userEmail.length === 0) {
    // console.log("Array is empty");
}
const emptyObj = {}
if(Object.keys(emptyObj).length === 0) {
    // console.log("Object is empty")
}

// Nullish Coalescing Operator (??): null undefined

let val;
val = 5 ?? 10           //used to get the first value
val = null ?? 10        //if there is any other thing than 'null'
val = null ?? 10 ?? 43
// val = undefined ?? 12   
// console.log(val)

//Ternary Operator
// condition ? true : false

const Price = 190
Price <= 90 ? console.log("Cheaper") : console.log("Expensive")
