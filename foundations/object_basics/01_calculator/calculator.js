const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const sum = function (arr) {
    if (arr.length === 0) {
        return 0;
    } else if (arr.length === 1) {
        return arr[0];
    } else {
        return arr.reduce((a, b) => a + b);
    }
};

const multiply = function (arr) {
    if (arr.length === 0) {
        return 0;
    } else if (arr.length === 1) {
        return arr[0];
    } else {
        return arr.reduce((a, b) => a * b, 1);
    }
};

const power = function (a, b) {
    if (!b) {
        return a;
    } else {
        let accum = 1;
        for (let i = b; i > 0; i--) {
            accum *= a;
        }
        return accum;
    }
};

const factorial = function (a) {
    if (a === 0 || a === 1) {
        return 1;
    } else {
        let result = 0;
        for (let i = 1; i < a; i++) {
            result = (result + (a - i)) * (a - i);
        }
        return result + 1;
    }
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
