const sumAll = function(start, end) {
    let sum = 0;
    if (start < 0 || end < 0 || typeof(start) !== "number" || typeof(end) !== "number") {
        return "ERROR";
    } else {
    if (start < end) {
        for (i = start; i <= end; i++) {
        sum += Number(i);
    }} 
    else {
    for (i = start; i >= end; i--) {
        sum += Number(i);
    }
    }}
    return sum;
}

sumAll(1, 4);

sumAll(1, 4000);

sumAll(123, 1);

sumAll(-10, 4);

sumAll(10, "90");

sumAll(10, [90, 1]);

// Do not edit below this line
module.exports = sumAll;
