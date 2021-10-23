function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    var item2 = arr.shift();    
    return item2;
    // Only change code above this line
      
}
  
  // Setup
  var testArr = [1,2,3,4,5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));