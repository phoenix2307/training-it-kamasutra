function removeChar(str){
    //You got this!
    let string = str.slice(1, str.length-1);
    return string;
}

let test = removeChar('Alex');
console.log(test);

// Вариант проще
/*
function removeChar(str) {
    return str.slice(1, -1);
}

или

const removeChar = str => str.slice(1,-1)
*/