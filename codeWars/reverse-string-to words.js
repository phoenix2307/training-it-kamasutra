/*
Complete the solution so that it reverses all of the words within the string passed in.

Example:

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
*/

//My solution = best practices
function reverseWords(str){
    return str.split(' ').reverse().join(' ');
}

//arrow
const reverseWords2 = (str) => str.split(" ").reverse().join(" ");

