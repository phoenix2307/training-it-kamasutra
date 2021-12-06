console.log('yo');
console.log(123);
//Примитивы: string, number, boolean, null, underfined, NaN, Symbol, BigInt

// const prop = 'name'
const user = {
  name: 'Bob',
  friends: ['Alex', 'Donald']
};


//Обьекты: объекты, массивы, функции.
// Array.isArray() - для проверки переменной на предмет того является ли она массивом
// поверхностная копия объекта с помощью spred-оператора. не копирует объекты/ссылки, которые есть внутри
const copyUser ={...user};
copyUser.name = 'lo';
console.log(copyUser)

//Глубока копия
const deepCopyUser = {...user, friends:[...user.friends]}
deepCopyUser.friends.push('Ivan')
console.log(deepCopyUser)
console.log(user)

//метод Object.assign()

//

const students = [
  {
    name: "Bob",
    age: 22,
    isMarried: true,
    scores: 120,
  },
  {
    name: "Alex",
    age: 21,
    isMarried: true,
    scores: 85
  },
  {
    name: "Michel",
    age: 20,
    isMarried: false,
    scores: 89
  },
  {
    name: "John",
    age: 19,
    isMarried: false,
    scores: 100
  }
]

let some = {
  name: "Nika",
  age: 1,
  isMarried: false,
  scores: 1
}
const newArr = students.map((st) => `<li>Hi, ${st.name}! how are you. You have ${st.scores} scores</>`)
console.log(newArr)

console.log('students', students)
let [...arr2] = students

let [...c] = '14656565655';
console.log(c)
const res = +c[0] + +c[c.length-1]
console.log(res)


let [...str] = 'alexei'
console.log(str[3].toUpperCase())
console.log(typeof  str.join(''))

const arr10 = students.map(st => {st = {...students}})
console.log(arr10)


