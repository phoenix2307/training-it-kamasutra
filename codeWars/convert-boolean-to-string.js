// BP
function booleanToString(b) {
    return b.toString();
}

//iteresting
function booleanToString(b) {
    return b ? 'true' : 'false';
}


//MS
function booleanToString(b){
    //your code here
    switch (b) {
        case true:
        return 'true';
        case false:
        return 'false';
        default:
        return undefined;
        
    }
}