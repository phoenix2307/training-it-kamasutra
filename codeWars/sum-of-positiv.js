// Best practices
function positiveSum(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
 }

// My solution
function positiveSum(arr) {
    let sum = 0;
  arr.forEach(element => {      
      if (element > 0) {
          sum = sum + element;
      }
  });
  return sum;
}
