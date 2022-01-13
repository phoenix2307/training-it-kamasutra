// 'use strict'
/*Создайте объект calculator (калькулятор) с тремя методами:

read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.*/

let calculator = {
  read(value1, value2) {
    calculator.a = value1
    calculator.b = value2
  },
  sum() {
    console.log(this.a + this.b)
  },
  mul() {
    console.log(this.a * this.b)
  },
  logOut() {
    console.log(calculator)
  }

};

calculator.read(5, 10);
calculator.sum();
calculator.mul();
calculator.logOut();

/*----------------------------------------------------------*/


let ladder = {
  step: 0,
  up() {
    this.step++;
    return this // возвращает обновленный объект
  },
  down() {
    this.step--;
    return this
  },
  showStep: function () {
    console.log(this.step);
    return this
  }
};


ladder.up().up().up().showStep().down().showStep();

/*Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:

ladder.up().up().down().showStep(); // 1*/


