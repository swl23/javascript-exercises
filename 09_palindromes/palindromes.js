const palindromes = function (phrase) {
    const originalString = [];
    const punctuationList = ['!', '.', ',', ' '];
    for (i = 0; i < phrase.length; i++) {
        if (punctuationList.includes(phrase[i])) {
            continue
        }
        else {
            originalString.push(phrase[i].toLowerCase())
        }
    }
    const reverseString = [];
    for (j = originalString.length - 1; j >= 0; j--) {
        reverseString.push(originalString[j])
    };
    original = originalString.join('');
    reverse = reverseString.join('');
    console.log(original);
    console.log(reverse);
    if (original === reverse) {
        return true
    }
    else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
