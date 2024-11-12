const repeatString = function(string, num) {
    let result = string;
    if (num === 0) {
        result = '';
        return result
    }
    else if (num < 0) {
        result = 'ERROR';
        return result
    }
    let i = 1;
    while (i < num) {
        result += string;
        i++
    }
    return result
};

// Do not edit below this line
module.exports = repeatString;
