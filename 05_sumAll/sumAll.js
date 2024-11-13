const sumAll = function(a, b) {
    if (a < 0) {
        return 'ERROR';
    }
    if (!Number.isInteger(a)) {
        return 'ERROR';
    }
    if (b < 0) {
        return 'ERROR';
    }
    if (!Number.isInteger(b)) {
        return 'ERROR';
    }
    if (typeof a !== 'number') {
        return 'ERROR';
    }
    if (typeof b !== 'number') {
        return 'ERROR';
    }
    let biggerNumber = 0;
    let smallerNumber = 0;
    if (a > b) {
        biggerNumber = a;
        smallerNumber = b;
    }
    else if (a < b) {
        biggerNumber = b;
        smallerNumber = a;
    }
    let finalTotal = 0;
    for (i = 0; i <= (biggerNumber - smallerNumber); i++) {
        finalTotal += (smallerNumber + i)
    }
    return finalTotal
};

// Do not edit below this line
module.exports = sumAll;
