const reverseString = function(correctWord) {
    const reverseWord = [];
    for (i = correctWord.length - 1; i >= 0; i--) {
        reverseWord.push(correctWord[i])
    };
    let finalWord = '';
    for (letter of reverseWord) {
        finalWord += letter;
    }
    return finalWord;
};

// Do not edit below this line
module.exports = reverseString;
