/*
3) Challenging: Write a function called make_avg() which will take an array of integers and
the size of that array and return the average of those values.
*/

// function declaration
function make_avg(numbers, size) {
    // declare variable and initialize
    let sum = 0, average;

    // loop through the whole array and sum
    for (let number of numbers) {
        sum += number;
    }
    // calculate average
    average = sum / size;

    // return average
    return average;
}

// funciton invoke
console.log(make_avg([1, 2, 45, 56, 78, 94, 23, 29, 93], 9));