
for(let index = 0; index < 10; index++) {
    const element = index;
    // console.log(element)
}

/*
for(let i=1; i<=10; i++) {
    console.log(`Table of ${i}`);
    for(let j=1; j<=10; j++) {
        // console.log(i + " * " + j + " = " + i*j);
        console.log(`${i} * ${j} = ${i*j}`);
    }
    console.log()
}

let myArray = ["Flash", "IronMan", "Hulk"]
for(let i=0; i<myArray.length; i++) {
    console.log(myArray[i]);    
}
*/

const myArray = [3, 2 , 19, 1, 6, 7, 4, 12, 5, 1, 8, 10, 34, 21]
for(let i=0; i<myArray.length; i++) {
    if(myArray[i] >= 10)    continue;
    // console.log(myArray[i]);
}

for(let i=0; i<myArray.length; i++) {
    if(myArray[i] >= 20)    break;
    console.log(myArray[i]);
}
