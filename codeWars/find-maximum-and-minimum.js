var min = function(list){
    let min;
    if (list.length > 1) {
        for (let i = 0; i < list.length - 1; i++) {
            min = list[i];
            if (list[i + 1] < list[i]) {
                min = list[i+1];
            }        
        }
        return min;
    }
    return list[0];

};


let a = [-52, 56, 30, 29, -54, 0, -110];
let b = [42, 54, 65, 87, 0];
let c = [4,6,2,1,9,63,-134,566];
let d = [5];
let e = [];

var max = function(list){
    let max;
    if (list.length > 1) {
        for (let i = 0; i < list.length - 1; i++) {
            max = list[i];
            if (list[i + 1] > list[i]) {
                max = list[i+1];
            }        
        }
        return max;
    }
    return list[0];

};

console.log(max(a));