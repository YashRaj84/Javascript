const coding = ['ruby', 'python', 'sql']

// coding.forEach(function (val) {console.log(val)})

// coding.forEach( (item) => {
    // console.log(item)
// })

function printMe(item) {
    console.log(item)
}
// coding.forEach(printMe)

const myCode = [
    {
        langName: "HTML",
        fileExtension: 'html'
    },
    {
        langName: "Python",
        fileExtension: 'py'
    },
    {
        langName: "Javascript",
        fileExtension: 'js'
    }
]
myCode.forEach( (item) => {console.log(item.langName), console.log(item.fileExtension)} )