function countBits (n) {
    let biNumber = (n >>> 0).toString(2);
    let count = 0;
    for (let bit of biNumber) {
        if(bit == 1) {
            count++;
        }
    }
    return count;
}
