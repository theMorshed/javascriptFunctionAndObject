/*
১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে। 
*/

// function for multiplication table
function multiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        console.log('%d * %d = %d', number, i, number * i);
    }
}

// call or invoke function with parameter
multiplicationTable(17);