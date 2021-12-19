/*
Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):
"4",  "5" --> "9"
"34", "5" --> "39"
"", "" --> "0"
"2", "" --> "2"
"-5", "3" --> "-2"
Example: (Input1, Input2 -->Output)

If either input is an empty string, consider it as zero.
  Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)*/

function sumStr(a, b) {
  a = Number(a)
  b = Number(b)
  let c = a + b
  if (a === ''){
    a = 0
  }
  if (b === ''){
    b = 0
  }
    return String(c)
}

//Best Practices
function sumStr2(a,b) {
  return String(Number(a)+Number(b));
}