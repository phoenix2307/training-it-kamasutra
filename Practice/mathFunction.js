//Работа с математическими функциями. Урок№ 6. http://old.code.mu/tasks/javascript/base/rabota-s-matematicheskimi-funkciyami-v-javascript.html


/*console.log('Округления')
let number = 379
let sqrt = Math.sqrt(number)
console.log(sqrt)
console.log(Math.ceil(sqrt))
console.log(Math.floor(sqrt))
console.log(sqrt.toFixed(3))
console.log(sqrt.toPrecision(3))*/
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
for (let c = 0; c < arrRandomNumber.length; c++) {
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

  for (let c = 0; c < arrTest.length; c++) {
    sumTest += arrTest[c]
  }

  const average = sumTest / arrTest.length

  return console.log(`new list of numbers: ${arrTest}. Their sum = ${sumTest} and average value = ${average}`)

}

testingArr(1, 10, 4)

let arr12 = [12, 15, 20, 25, 59, 79]
let sum12 = 0
for (let i = 0; i < arr12.length; i++) {
  sum12+= arr12[i]
}
console.log(sum12 / arr12.length)