/*
I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
*/

//BP
function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}

//MS
function arrayPlusArray(arr1, arr2) {
    return arr1.reduce((t, c) => t + c, 0) + arr2.reduce((t, c) => t + c, 0);
}