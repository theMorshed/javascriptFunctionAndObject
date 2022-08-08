/*
5) You are in a hurry to go to your school on time. But when you are crossing the road, the
traffic signal is red coloured. In this situation, if you try to cross the road, you may be in
danger.If you notice a yellow coloured traffic signal, you should stop. If you notice a green
coloured traffic signal, you should cross the road. So write a JS code, where there is a
variable called signal. Its value can be green, yellow or red & we will get different activities as
output depending on the variable. So, hurry up.
*/

// declare variable
let signal = 'green';

// make a decission according to the signal
if (signal === 'red') {
    console.warn('You may be in DANGER.');
}
else if (signal === 'yellow') {
    console.warn('You should stop.');
}
else if (signal === 'green') {
    console.log('You should cross the road');
}