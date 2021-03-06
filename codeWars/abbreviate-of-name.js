//Best practices
function abbrevName(name){

    var nameArray = name.split(" ");//массив с двумя строками: имя и фамилия. 
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase(); // обращаюсь к строкам как к вложеному массиву
    // КРУТО
}
abbrevName(name)


//My solution
function abbrevName2(name){
    let arr = name.toUpperCase().split('');
    for (let i=0; i<=arr.length; i++) {
        if (arr[i] === ' ') {
            return `${arr[0]}.${arr[i+1]}`;
        }
    }
}
abbrevName2(name)