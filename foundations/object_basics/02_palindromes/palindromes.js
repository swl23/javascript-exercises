const palindromes = function (string) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz1234567890";
    const forward = [];
    for (let i = 0; i < string.length; i++) {
        if (alphabet.includes(string[i].toLowerCase())) {
            forward.push(string[i].toLowerCase());
        }
    }
    const backward = [];
    for (let j = forward.length - 1; j >= 0; j--) {
        backward.push(forward[j]);
    }
    if (forward.join("") === backward.join("")) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
