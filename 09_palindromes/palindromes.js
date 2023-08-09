function palindromes(string) {
    const stripedString = string.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "").toLowerCase();

    if (stripedString == stripedString.split('').slice().reverse().join('')) {
        return true;
    } else {
        return false;
    }
}

// Do not edit below this line
module.exports = palindromes;
