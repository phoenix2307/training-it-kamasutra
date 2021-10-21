/*
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

*/

//BP
function find_average(array) {
    var sum = array.reduce((a, b) => a + b, 0);
    return sum/array.length;
}

//MS
function findAverage(array) {
    if (array && array.length) {
        let average = array.reduce((total, current) => total + current, 0) / array.length;
        return average;
    } else {
        return 0;
    }    
}
