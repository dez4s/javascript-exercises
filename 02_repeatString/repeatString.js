const repeatString = function(string, num) {
    let phrase = '';
    if (num >= 0) {
    for (i = 1; i <= num; i++) {
        phrase += string;
    } 
    return phrase
    } else {
        return 'ERROR';
    }

};

repeatString('hey', 3);

repeatString('hey', 10);

repeatString('hey', 1);

repeatString('hey', 0);

repeatString('hey', -1);

const number = Math.floor(Math.random() * 1000)
repeatString('hey', number);

repeatString('', 10);

// Do not edit below this line
module.exports = repeatString;
