// Besr practices
function digitize(n) {
    return String(n).split('').map(Number).reverse();
  }

// My solution
function digitize(n) {
    let arr = `${n}`.split('').reverse().map(item => +item);
    //наверное, лучше будет `${n}` заменить на (n + '')
    return arr;
}