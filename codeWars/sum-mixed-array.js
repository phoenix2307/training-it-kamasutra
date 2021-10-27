/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/
//BP
function sumMix(x){
    return x.map(a => +a).reduce((a, b) => a + b);
}
  //or
const sumMix2=x=>x.reduce((a,b)=>+b+a,0);

//MS
function sumMix(x){
    return x.map(Number).reduce((t, c) => t + c, 0);
}

const arr = ['1', '2', '3'];

console.log(sumMix(arr));