function paperwork(n, m) {
    if (n<0 || m<0) {
        return 0;
    }
    return n * m;
}


const paperwork2 = (n, m) => n < 0 || m < 0 ? 0 : n * m;