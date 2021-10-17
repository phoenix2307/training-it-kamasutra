// Лучшие варианты

function solution(str){
    return str.split('').reverse().join('');  
}

const revStr = str => str.split('').reverse().join('');

let alex = revStr('alex');
console.log(alex);

//Мой вариант

function solution(str) {
    let array = str.split('');
    array.reverse();
    let newStr = array.join('');
    return newStr;    
}

let alex2 = solution('alex');
console.log(alex2);

const reverseString = str => {
    
    let array = str.split('');
    array.reverse();
    let newStr = array.join('');
    return newStr;
}

let nika = reverseString('nika');
console.log(nika);


