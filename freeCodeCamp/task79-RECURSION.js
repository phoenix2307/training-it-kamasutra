function sum(arr, n) {
    // Only change code below this line
    
    let total = 0;
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        total = arr[0];
    } else {
        total = sum(arr, n-1) + arr[n-1];
    }
    return total;
    // Only change code above this line
}

let ar1 = [2, 3, 4, 5];
let ar2 = [];
let ar3 = [2];

console.log(sum(ar2, 0));