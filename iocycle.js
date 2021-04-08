let fs = require('fs')



let total = 0
    //IO cycle

fs.readFile('./index.js', () => {


    setTimeout(print1, 0)
    setImmediate(print2) //get priority
})
let n = 1


function print1() {
    total = n * 10;
    console.log("Total 1:", total)
    n++;
}

function print2() {
    total = n * 10;
    console.log("Total 2:", total)
}