const accountId = 12324590
let accountEmail = "12324590.lpu.in"
var accountPassword = "@2698"
accountCity = "Phagwara"

//accountId = 12345637  This can't be done because the datatype is constant
// Prefer not to use 'var' because of issue in block scope and functional scope
// It means if any developer changes the value of 'var' anywhere it gets changed everywhere.
accountEmail = "yash2698@gmail.com"
accountPassword = "yash2698"
accountCity = "Patna"
console.table([accountId, accountEmail, accountPassword, accountCity])