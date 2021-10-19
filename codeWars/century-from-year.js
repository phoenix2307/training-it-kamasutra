// Best practices
const century = year => Math.ceil(year/100);

// My sollution
function century2(year) {
    // Finish this :)
    let centFromYear;

    if (year % 100 == 0) {
        centFromYear = Math.floor(year / 100);
    } else {
        centFromYear = Math.floor(year / 100) + 1;
    }
    return centFromYear;
}
