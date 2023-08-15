const findTheOldest = function(array) {
    return array.reduce((accumulator, elem) => {
        const currentOldest = calcAge(accumulator);
        const currentElemAge = calcAge(elem); 

        return currentElemAge > currentOldest ? elem : accumulator
    })
}


function calcAge(person) {
    const currentYear = new Date().getFullYear();
    if (!person.yearOfDeath) return currentYear - person.yearOfBirth;
    return person.yearOfDeath - person.yearOfBirth;
}


// Do not edit below this line
module.exports = findTheOldest;
