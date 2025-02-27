// Immediately Invoked Function Expressions (IIFE)

(function chai() {               // named iife
    console.log(`DB CONNECTED`)
}) ();
//   ^--(;) Need semicolon to end this block of code

( () => {
    console.log(`DB CONNECTED TWO`)
}) ();

( (name) => {                    // unnamed iife
    console.log(`DB CONNECTED TWO ${name}`)
}) ('Yash');
