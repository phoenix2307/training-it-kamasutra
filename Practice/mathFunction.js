//
/*console.log('Округления')
let number = 379
let sqrt = Math.sqrt(number)
console.log(sqrt)
console.log(Math.ceil(sqrt))
console.log(Math.floor(sqrt))
console.log(sqrt.toFixed(3))
console.log(sqrt.toPrecision(3))*/

console.log('*************************')


//

/*
let x = 14
let y = 7
if (x % y === 0) {
  console.log(`делится, ровно ${x / y}`)
} else {
  console.log(`не делится без остатка. Остаток = ${x % y}`)
}
*/

//
// Работа со строками: split, join, reverse, String(), Number()

//split
/*Метод split осуществляет разбиение строки в массив по указанному разделителю.

  Разделитель указывается первым необязательным параметром. Если он не задан - вернется вся строка. Если он задан как пустые кавычки '' - то каждый символ строки попадет в отдельный элемент массива.

  Вторым необязательным параметром можно указать максимальное количество элементов в получившемся массиве (см. примеры).*/

/*
let str2 = 'html-css-javascript';
console.log(str2.split('', 4))

let str = '123456789';
let newStr = str.split('')
  .reverse()
  .join('')
console.log(newStr)

//сумма чисел из строки
let str5 = '12345'
let arr = str5.split('')
let sum = 0
for (let i = 0; i < arr.length; i++) {
  sum += Number(arr[i])
}
console.log(sum)

let num = 12345
let strNum = String(num)
console.log(strNum.split(''))
let num2 = Number(strNum)
console.log(num2)*/

//!!!! метод определения максимума из массива чисел
let arr = [-5, 1, 2, 3, 4, 6, 12, 6, 32]
console.log(Math.max.apply(null, arr)) // 32
console.log(Math.min.apply(null, arr)) // -5

// Random в определенном заданном диапазоне min & max
console.log(Math.random())

function getRandomArbitary(min, max) {
  return Math.floor(Math.random() * (max - min) + 1) + min;
}

console.log(getRandomArbitary(1, 100))


// Генерация 10 случайных чисел в диапазоне 1- 100
let arrRandomNumber = []

for (let i = 0; i < 4; i++) {
  let newNumber = Math.floor(Math.random() * ((100 - 1) + 1) + 1)
  arrRandomNumber.push(newNumber)

    }
console.log(arrRandomNumber)
let sum2 = 0
for (let c = 0; c <arrRandomNumber.length; c++) {
  sum2 += arrRandomNumber[c]
}
console.log(sum2)

// функция для генерации случайных чисел в заданном количестве и вычисляющая их сумму и среднее значение
const testingArr = (minim, maxim, count) => {
  let arrTest = []
  let sumTest = 0

  for (let i = 0; i < count; i++) {
    let newNum = Math.floor(Math.random() * ((maxim - minim) + minim) + minim)
    arrTest.push(newNum)
  }

  for (let c = 0; c <arrTest.length; c++) {
    sumTest += arrTest[c]
  }

  const average = sumTest / arrTest.length

  return console.log(`new list of numbers: ${arrTest}. Their sum = ${sumTest} and average value = ${average}`)

}

testingArr(1, 10, 4)