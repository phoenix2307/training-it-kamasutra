/*
Our football team finished the championship. The result of each match look like "x:y". 
Results of all matches are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship. 
Rules for counting points for each match:

if x>y - 3 points
if x<y - 0 point
if x=y - 1 point
Notes:

there are 10 matches in the championship
0 <= x <= 4
0 <= y <= 4
*/

//BP
const points=games=>games.reduce((output,current)=>{
    return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
  },0)


//MS
let arr = ["3:1", "2:2", "0:1"];

function points2(games) {
    let sum = 0;
    for (let item of games) {
        if (item[0] > item[2]) {
            sum = sum + 3;
        } else if (item[0] === item[2]) {
            sum = sum + 1;
        } else {
            sum = sum + 0;
        }
    }
    return sum;
}

console.log(points2(arr));