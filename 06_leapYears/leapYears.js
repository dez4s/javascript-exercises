const leapYears = function(year) {
    let leapYes = 0;
    if (year % 4 == 0) leapYes++; 
    if (year % 100 == 0) leapYes--;
    if (year % 100 == 0 && year % 400 == 0) leapYes++;
    if (leapYes == 1) return true; else return false;
} 

leapYears(1996);
leapYears(1997);
leapYears(34992);
leapYears(1900);
leapYears(1600);
leapYears(700);

// Do not edit below this line
module.exports = leapYears;
