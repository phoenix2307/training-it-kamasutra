/*
Given a number n, return the number of positive odd numbers below n, EASY!

oddCount(7) //=> 3, i.e [1, 3, 5]
oddCount(15) //=> 7, i.e [1, 3, 5, 7, 9, 11, 13]
*/

//MS == BP
const oddCount = n => Math.floor(n / 2);

//второй вариант тоже рабочий но при большом числе система умирает - слишком долго вычисляет
function oddCount2(n){    
    let total = 0;
    for (let i=0; i<n; i++) {        
        if (i%2 != 0) {
            total ++;
        }
    }
    return total;
}