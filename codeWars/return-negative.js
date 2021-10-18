// my solution
const makeNegative = num => num > 0 ? -num : num;

// best practices
function makeNegative2(num) {
    return -Math.abs(num);
}