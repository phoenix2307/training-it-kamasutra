//best practices
function repeatStr (n, s) {
    return s.repeat(n);
}

// my solution
function repeatStr (num, str) {
    let string = '';
    for (let i = 1; i <= num; i++) {
        string = string + str;
    }
    return string;
}

