//BP
function firstNonConsecutive(arr) {
    for (let i = 0; i < arr.length - 1; ++i) {
      if (arr[i] + 1 !== arr[i + 1]) {
        return arr[i + 1]
      }
    }
    return null;
}

//MS

function firstNonConsecutive (arr) {
    let output ='';
    for (let i = 0; i < arr.length; i++) {
        let a = arr[i];
        let b = arr[i+1];
      
        if (b - a != 1) {
            output = b;
            break;
        } else {
            output = null * null;
        }

    }
    if (output !=  b) {
        return null * null;
    }
}

let a = [1,2,3,4,5,6,7,8];
console.log(firstNonConsecutive (a));