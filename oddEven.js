/*
4) Write a function called odd_even() which takes an integer value and tells whether this
value is even or odd. You need to do it in 4 ways:
    ● Has return + Has parameter
    ● No return + Has parameter
    ● Has return + No parameter
    ● No return + No parameter
*/

// Has return and Has parameter
function odd_even_return_parameter(number) {
    if (number % 2 === 0) {
        return 'even';
    }
    else {
        return 'odd';
    }
}

console.log(odd_even_return_parameter(104));

// No return and Has parameter
function odd_even_parameter(number) {
    if (number % 2 === 0) {
        console.log('even');
    }
    else {
        console.log('odd');
    }
}

odd_even_parameter(104);

// globar variable for no parameter function
let number = 104;

// Has return and No parameter
function odd_even_return() {
    if (number % 2 === 0) {
        return 'even';
    }
    else {
        return 'odd';
    }
}

console.log(odd_even_return());

// No return and No parameter
function odd_even() {
    if (number % 2 === 0) {
        console.log('even');
    }
    else {
        console.log('odd');
    }
}

odd_even();