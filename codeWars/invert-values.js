// Best practices
function invert(array) {
    return array.map( x => x === 0 ? x : -x);
 }

//My solution
function invert(array) {
    let arr = [];
    if (array.length != 0) {
        arr = array.map(item => item*-1);        
    }
    return arr;    
}



/*
invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
*/
const arr = [1,2,3,4,5],
arr2 = [1,-2,3,-4,5],
arr3 = [];

console.log(invert(arr3));


