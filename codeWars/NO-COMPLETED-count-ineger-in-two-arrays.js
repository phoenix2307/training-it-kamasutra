// function countPositivesSumNegatives(input) {
//     let result = [];
//     if (input != null || input.length > 0) {
//         const positiv = input.filter(item => item > 0).length;
//         const negativ = input.filter(item => item < 0).reduce((total, current) => total + current);
//         result = [positiv, negativ];
//     }
//     return result;

// }

function countPositivesSumNegatives(input) {
    let result = [];
    if (input.length == 0 || input === null || input === undefined || input === false){
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