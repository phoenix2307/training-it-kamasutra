/*
Sometimes people use an if/else statement to do a comparison, like this:

function isEqual(a,b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}

But there's a better way to do this. Since === returns true or false, we can return the result of the comparison:

function isEqual(a,b) {
  return a === b;
}
*/

function isLess(a, b) {
    
    return a < b;

    // Вместо кода, который написан ниже:
    /*
    if (a < b) {
      return true;
    } else {
      return false;
    }
    */
}
  
isLess(10, 15);