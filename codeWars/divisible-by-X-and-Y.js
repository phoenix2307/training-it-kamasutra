// Best practices
function isDivisible(n, x, y) {
    return n % x === 0 && n % y === 0;
}

// My solution
const isDivisible2 = (n, x, y) => (n%x == 0 && n%y == 0) ? true : false;