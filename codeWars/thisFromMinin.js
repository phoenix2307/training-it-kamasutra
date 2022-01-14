/*
https://www.youtube.com/watch?v=UGapN-hrekw&t=345s
02:57 оно вызывает то, что стоит слева от точки, где мы вызываем данную функцию
03:20 Ключевое слово this всегда динамичное, оно указывает на тот объект в контексте которого оно было вызвано
04:50 функция bind - в качестве значения этой функции му можем передать тот контекст который будет привязан у вызываемой функции
05:37 сам по this себе указывает на глобальный объект window
09:00 метод bind на самом деле не вызывает функцию, а возвращает новую функцию которая уже привязала к себе новый контекст и ее надо вызывать вручную
09:50 метод group у объекта console
12:51 С помощью метода bind, помимо того что первым параметром мы указываем контекст который должен быть привязан к новой функции, другими параметрами мы можем передавать следующие параметры которые нужны функции
13:47 Метод call. Отличие от метода bind, что он метод call сразу же вызывает эту функцию, а метод bind в свою очередь возвращает нам новую функцию, и её мы можем вызвать тогда, когда нам угодно
14:50 Метод apply. В отличие от методов bind и call, где можно бесконечное число параметров, в метод apply мы всегда передаем два параметра.
У метода apply второй параметр всегда массив, и этот массив состоит из аргументов которые попадут в эту функцию.
Метод apply сразу же вызывает эту функцию.
15:45 Практика с использованием прототипов и контекста (this)*/

function hello() {
  console.log('Hello, ', this)
}

const person = {
  name: 'Alex',
  age: 41,
  sayHello: hello,
  // sayHelloWindow: hello.bind(window), // связка this с другим объектом (в данном случае window)
  logInfo: function () {
    console.group(`${this.name} info:`)
    console.log(`Name is ${this.name}`)
    console.log(`Age is ${this.age}`)
    console.groupEnd()
  }
}

/*-------------------- bind ------------------------------*/
// bind() определяет функцию с новым контекстом, но саму функцию не вызывает. Она готова для вызова в нужный для нас момент
// необходимо вызвать вручную: person.logInfo.bind(myCherry)()
person.logInfo(); //Name is Alex Age is 41

const myCherry = {
  name: 'Natalie',
  age: 38
}

person.logInfo.bind(myCherry)() // => Name is Natalie Age is 38

/*--------------------- bind + params ----------------------*/
//передача свойств объекту через метод объекта

const personTwo = {
  name: 'Nika',
  age: 22,
  sayHello: hello,
  logInfo: function (job, phone) {
    console.group(`${this.name} info:`)
    console.log(`Name is ${this.name}`)
    console.log(`Age is ${this.age}`)
    console.log(`Job is ${job}`) // передаем без this, так как это параметр функции
    console.log(`Phone is ${phone}`)
    console.groupEnd()
  }
}

const max = {
  name: 'Maxim',
  age: 25
}
personTwo.logInfo() //Nika info:
/*Name is Nika
Age is 22
Job is undefined
Phone is undefined*/
personTwo.logInfo.bind(max)('programmer', '050-803-37-11')
/*Maxim info:
  Name is Maxim
  Age is 25
  Job is programmer
  Phone is 050-803-37-11
*/
// аналогично при вызове таким образом personTwo.logInfo.bind(max, 'programmer', '050-803-37-11')()

/*--------------------- call + apply --------------------------------*/

/*Метод call() аналогично bind() создает определяет для функции новый контекст и сразу вызывает ее
* в параметрах call первым идет ссылк на контекст, а дальше все параметры функции*/
const petr = {
  name: 'Petr',
  age: 50
}

personTwo.logInfo.call(petr, 'driver', '8-050-655-65-65')
/*Petr info:
  Name is Petr
  Age is 50
  Job is driver
  Phone is 8-050-655-65-65
*/

/* apply принимает всегда два параметра, первый - ссылка на контекст, второй - параметров для функции в виде массивов*/
personTwo.logInfo.apply(petr, ['driver', '8-050-655-65-65'])
/*Petr info:
  Name is Petr
  Age is 50
  Job is driver
  Phone is 8-050-655-65-65
*/

/* ------------- practices с расширением прототипов---------------------*/

const arr = [1, 2, 3, 4, 5, 6, 7]
const multiply = (num) => {
  return arr.map(i => i * num)
}
console.log(multiply(3)) // [3,  6,  9, 12, 15, 18, 21]
/*----------------- !!! добавление к Array.prototype нового метода !!! ------------------------*/
Array.prototype.xz = function (num) {
  return this.map(i => i * num) // в this передается контекст в момент вызова созданного метода xz() из объекта, который его вызывает
}
console.log(arr.xz(5))
