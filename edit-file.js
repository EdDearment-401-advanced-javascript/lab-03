'use strict' //Lab does not require it
const fs = require('fs');

fs.readFile('./files/test.txt', 'utf8', (err, data) => {
    if(err) throw err;
    console.log(`Before \n ${data}`);
    console.log(data.length);
});

let randomVal = Math.random();


fs.appendFile('./files/test.txt', `\n ${randomVal}`, (err) => {
    if(err) throw err;
    console.log(`writing ${randomVal}`);
});

fs.readFile('./files/test.txt', 'utf8', (err, data) => {
    if(err) throw err;
    console.log(`After \n ${data}`);
    console.log(data.length);
});