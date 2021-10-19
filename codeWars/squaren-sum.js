// Best practices
function squareSum(numbers){
    return numbers.reduce(function(sum, n){
      return (n*n) + sum;
    }, 0)
  }

// My solution
function squareSum(numbers){
    let square = numbers.map(function (item) {
        return item*item;
    });
    let result = square.reduce((sum, current) => sum + current,0);
    return result;    
}