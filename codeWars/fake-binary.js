/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
все что меньше 5 перевести в ноль, пять и выше в едиинницу
*/

// best practices
function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}


// my solution
const fakeBin2 = x => x.split('').map(item => item < 5 ? item = 0 : item = 1). join('');
