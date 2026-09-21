const removeFromArray = function (array, ...items) {
    const result = [];
    for (let val of array) {
        if (!items.includes(val)) {
            result.push(val);
        }
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
