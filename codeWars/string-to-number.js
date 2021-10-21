/*
Description
We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

Examples
"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7
*/

var stringToNumber = function(str){
    return +str;
    //варианты
    // return parseInt(str);
    // return Number(str);
}

////////////// Много вариантов

/*
const ways = [
  s => +s,
  s => s++, // why does it work?
  s => s--,
  s => ++s - 1,
  s => --s + 1,

  s => s * 1,
  s => s - 0,
  s => s / 1,
  s => s - '',
  s => s ** 1,
  s => s % Infinity,

  s => ~~s,
  s => s & -1,
  s => s | 0,
  s => s ^ 0,
  s => s << 0,
  s => s >> 0,
  s => s | s,
  s => s & s,

  s => ~s ^ -1,
  s => ~s ^ ~0, // ~0 = -1
  s => ~(s ^ -1),
  s => s * !!s,

  s => -1 * (~s + 1) || 0, // -1 * 0 = -0
  s => -(~(s >>> 0) + 1) || 0,

  Number,
  parseInt,
  parseFloat,
  
  s => Number(s),
  s => parseInt(s),
  s => parseFloat(s),

  s => Math.floor(s),
  s => Math.round(s),
  s => Math.ceil(s),
  s => Math.min(s),
  s => Math.max(s),
  
  Math.floor,
  Math.round,
  Math.ceil,
  Math.min,
  Math.max,

  s => eval(`+ ${s}`), // a space is needed
  s => eval('+ ' + s), // for cases like eval(+ +12345)

  s => [...s]
    .slice(+(s[0] == '-' || s[0] == '+')) // remove the sign, if present
    .reduce((acc,x) => +x + acc * 10)
    * (s[0] == '-' ? -1 : 1),
  s => [...s]
    .slice(+(s[0] == '+')) //remove +, if present
    .reverse()
    .reduce((acc,x,i) => x == '-' ? -acc : acc += x * 10 ** i, 0),
  s => ways[~~(Math.random() * ways.length)](s)
];

// And now we will use all the methods in a row
*/

// const checkThemAll /* © Mylene Farmer */ = (acc, x) => acc === x ? x : NaN;
// const stringToNumber = str => ways.map(fn => fn(str)).reduce(checkThemAll);