// Best practices
function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
  }

// My solution
function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    let count = arrayOfSheep.filter(item => item === true).length;
    return count;
}
