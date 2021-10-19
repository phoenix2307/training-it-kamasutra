// Best clever
const summation = n => n * (n + 1) / 2;


// My solution
var summation2 = function (num) {
    // Code here
    let sum = 0;
    for (let i=0; i<=num; i++) {
        sum += i;
    }
    return sum;
}

