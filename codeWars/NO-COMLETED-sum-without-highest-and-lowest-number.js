/*
Sum all the numbers of the array (in F# and Haskell you get a list) 
except the highest and the lowest element (the value, not the index!).
(The highest/lowest element is respectively only one element at each edge,
even if there are more than one with the same value!)

example:
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6

If array is empty, null or None, or if only 1 Element exists, return 0.

*/
//BP
function sumArray(array) {
    if (array == null) {
      return 0;
    } else if (array.length < 2) {
      return 0;
    } else {
      array = array.sort(function(a,b) {return a - b;});//sort() сортирует числа как строки 1, 11, 111, 2, 25...
      //для того, чтобы сортровать массив запускаем ф-цию сравнения function(a,b) {return a - b}
      //теперь элементы находятся по очереди согласно своего математического значения
      var total = 0;
      for (var i = 1; i < array.length - 1; i++) {//перебираем новый массив исключая первый и последний элемент массива
        // то есть убираем минимум и максимум
        total += array[i];
      }
      return total;
    }
  }



// Не смог решить

function sumArray(array) {
    if (array && array.length > 1) {
        // const sum = array.reduce((total, current) => total + current, 0);
        const min = Math.min.apply(null, array);
        const max = Math.max.apply(null, array);
        let newArr = array.filter(item => item > min && item < max);
        return newArr;
    
        // const total = newArr.reduce((total, current) => total + current, 0);    
        // return total;
    } else {
        return 0;
    }

}

let a = [1, 3, 5, 8];
let b = [-1, 3, 5, 8];
let c = [1, 3, 0, -8];
let d = [-1, -6, -5, -8];
let z = [4]

console.log(sumArray(z));
