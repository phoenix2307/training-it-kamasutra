/*
Description:
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

//Best practices
function countPositivesSumNegatives(input) {
    return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}



//Моя версия выдает ошибки

function countPositivesSumNegatives(input) {
    let result = [];
    if (input === 0 || input === null){
        return result;
    } else {
        const positiv = input.filter(item => item > 0).length;
        const negativ = input.filter(item => item < 0).reduce((total, current) => total + current);
        result = [positiv, negativ];
        return result;
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
let arr2 = [];
// console.log(arr2);




console.log(countPositivesSumNegatives(arr2));