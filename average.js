/*
2) Write a function called make_avg() which will take an three integers and return the
average of those values.
*/

// function declaration
function average(numberOne, numberTwo, numberThree) {
    let sum = numberOne + numberTwo + numberThree;
    let average = sum / 3;
    return average;
}

// Invocation
console.log(average(34, 100, 56));