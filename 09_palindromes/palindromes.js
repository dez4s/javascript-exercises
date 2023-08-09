function palindromes(string) {
    const stripedString = string.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "").toLowerCase();

    return (stripedString == stripedString.split('').slice().reverse().join(''));
}

// Do not edit below this line
module.exports = palindromes;
