// Best practices

const isPalindrome = (x) => {
    return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false;
  }

// My solution
let currentString = 'Alla';

function palindrome(str) {
    let testStr = str.toLowerCase();
    let reverseStr = testStr.split('').reverse().join('');
    if (testStr === reverseStr) {
        return true;
    } else {
        return false;
    }
}

let strPalindrome = palindrome(currentString);
console.log(strPalindrome);