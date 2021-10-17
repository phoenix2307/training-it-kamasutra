// Лучшее решение
function maps(x){
    return x.map(n => n * 2);
}

//Мое решение
function maps(x){
    let double = x.map(item => item*2);    
    return double;
}

let arr = [2, 4, 6];
let arrDouble = maps(arr);
console.log(arrDouble);
console.log(maps(arrDouble));
