console.log("Welcome to password validator tool!")

const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


reader.question("What is your password?", function(input){
    if (input.length >= 10){
        console.log('success');
    } else {
        console.log('failure')
    }
});