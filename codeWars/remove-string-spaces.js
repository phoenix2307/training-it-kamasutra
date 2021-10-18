// Best practices (regular)
function noSpace(x){
    return x.replace(/\s/g, '');
}

// My solution
const noSpace2 = str => str.split(' ').join('');