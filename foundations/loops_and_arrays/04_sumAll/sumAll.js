const sumAll = function (a, b) {
    if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
        return "ERROR";
    } else if (a === b) {
        return 0;
    } else {
        let big = a > b ? a : b;
        let small = a < b ? a : b;
        let sum = 0;
        while (big >= small) {
            sum += big;
            big--;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
